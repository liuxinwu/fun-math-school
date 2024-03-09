import Taro from "@tarojs/taro"
import qs from "qs"

export class RequestFn implements RequestType {
  domain: string
  port: number | null
  protool: string

  isNeedToken?: boolean
  isNeedLoading?: boolean
  isNeedCatchError?: boolean
  
  // 请求任务缓存
  taskMap = new Map()
  getToken = () => ({})

  /**
   * 构造函数
   *
   * @param config 配置对象
   */
  constructor(config: ConstructorType) {
    this.#init(config)
  }
  
  /**
   * 初始化函数
   *
   * @param config 配置对象
   * @param domain 请求的域名
   * @param port 请求的端口，默认为 null
   * @param protocol 请求的协议，默认为 'https'
   * @param isNeedToken 是否需要 token，默认为 true
   * @param isNeedLoading 是否需要加载提示，默认为 true
   * @param isNeedCatchError 是否需要捕获错误，默认为 true
   */
  #init(config: ConstructorType) {
    const { domain, port = null, protocol = 'https', isNeedToken = true, isNeedLoading = true, isNeedCatchError = true, getToken = () => ({}) } = config
    this.domain = domain
    this.port = port
    this.protool = protocol
    this.isNeedToken = isNeedToken
    this.isNeedLoading = isNeedLoading
    this.isNeedCatchError = isNeedCatchError
    this.getToken = getToken
  }

  /**
   * 生成 URL
   *
   * @param url URL 地址
   * @returns 返回完整的 URL
   */
  #generateUrl(url: string): string {
    const _url = url.startsWith('/') ? url : `/${url}`
    if (this.port) {
      return `${this.protool}://${this.domain}:${this.port}${_url}`
    }
    return `${this.protool}://${this.domain}${_url}`
  }

  /**
   * 标识请求参数
   *
   * @param option 请求参数
   * @returns 返回标识字符串
   */
  #identification(option: Taro.request.Option): string {
    const currentPages = Taro.getCurrentPages()
    return qs.stringify({
      ...option,
      referer: Taro.getCurrentPages[currentPages.length - 1]
    })
  }

  /**
   * 终止请求任务
   *
   * @param identification 请求标识
   * @param requestTask 请求任务对象
   * @returns 如果成功终止请求任务，返回true；否则返回false
   */
  #abort<T>(identification: string, requestTask: Taro.RequestTask<T>) {
    const _requestTask = this.taskMap.get(identification) || null
    if (!_requestTask) {
      this.taskMap.set(identification, requestTask)
      return false
    }

    _requestTask.abort()
    this.taskMap.set(identification, requestTask)
    return true
  }

  #handleToken(option: Taro.request.Option): void {
    option.header = {
      ...option.header,
      ...this.getToken(),
    }
  }

  #handleLoading(isClose = false): void {
    if (isClose) return Taro.hideLoading()

    setTimeout(() => {
      Taro.showLoading({ title: '加载中' })
    }, 100)
  }

  /**
   * 发起网络请求
   *
   * @param option 请求配置
   * @returns 返回请求结果
   */
  async #request<T>(option: Taro.request.Option): Promise<Taro.request.SuccessCallbackResult<T>> {
    return new Promise((resolve, reject) => {
      const identification = this.#identification(option)

      option.url = this.#generateUrl(option.url)
      this.isNeedToken && this.#handleToken(option)
      this.isNeedLoading && this.#handleLoading()
      const requestTask = Taro.request<T>(option)
      requestTask.then(_ => {
        const { statusCode } = _
        // 请求任务终止后，删除缓存
        this.taskMap.delete(identification)
        let errMsg = _.errMsg
    
        switch(statusCode) {
          case 200:
          case 201:
            return resolve(_)
          case 301:
            errMsg = '永久重定向'
          case 302:
            errMsg = '临时重定向'
          case 301:
            errMsg = '永久重定向'
          case 401:
            errMsg = '身份验证失败'
          case 404:
            errMsg = '服务器找不到请求的资源'
          case 500:
            errMsg = '服务器错误'
          case 502:
            errMsg = '网关错误'
        }
        _.errMsg = errMsg || '未知错误'
        return reject(_)
      }).catch(error => {
        console.log(error)
        return reject({
          data: error,
          errMsg: '请求失败',
          statusCode: 500,
        })
      }).finally(() => {
        this.isNeedLoading && this.#handleLoading(true)
      })
      
      // 微信、抖音小程序中，如果请求任务已经终止，则不会触发回调函数
      const envType = Taro.getEnv()
      if (Taro.ENV_TYPE.WEAPP === envType || Taro.ENV_TYPE.TT === envType) {
        this.#abort<T>(identification, requestTask)
      }
    })
  }

  /**
   * 使用 GET 请求发送请求并返回响应数据
   *
   * @param option 请求配置对象
   * @returns 返回响应数据
   */
  async get<T>(option: Taro.request.Option): Promise<Taro.request.SuccessCallbackResult<T>> {
    return this.#request<T>({
      ...option,
      method: 'GET'
    })
  }
}
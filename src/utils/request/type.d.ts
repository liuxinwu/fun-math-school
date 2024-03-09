
interface RequestType {
  // domain: string
  // port?: number | null
  // protool?: string

  // isNeedToken?: boolean
  // isNeedLoading?: boolean
  // isNeedCatchError?: boolean

  // init(config: ConstructorType): void
  // generateUrl(url: string, query: Record<string, unknown>): string
  get<T>(option: Taro.request.Option): Promise<Taro.request.SuccessCallbackResult<T>>
}

interface ConstructorType {
  domain: string
  port?: number | null
  protocol?: string

  isNeedToken?: boolean
  isNeedLoading?: boolean
  isNeedCatchError?: boolean

  getToken?(): {}
}

interface BookInfoType {
  book: string;
}
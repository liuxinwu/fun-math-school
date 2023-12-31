// 由于小程序不支持 svg, 所以不能使用 symbol 引用
// symbol 引用解决方案 https://www.qinglite.cn/doc/4113647779ba54bdd 

import { View } from "@tarojs/components";
import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import './index.scss'

const prefix = 'icon-'
export enum NameMap {
    ICON_PINGGUO = 'pingguo'
}

const COLORS = {
    [NameMap.ICON_PINGGUO]: '#8bc03c'
}

export default function Iconfont({ name, color = null }: PropsWithChildren<{
    name: NameMap,
    color?: string | null
}>): ReactElement {
    return <View className={classNames('iconfont', `${prefix}${name}`)} style={{ color: color || COLORS[NameMap.ICON_PINGGUO]}}></View>
}
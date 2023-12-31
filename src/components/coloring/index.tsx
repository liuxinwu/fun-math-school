import { View } from "@tarojs/components";
import { ReactElement } from "react";
import Iconfont, { NameMap } from "@/components/iconfiont";

import './index.scss'

export default function Coloring(): ReactElement {
    return <View className='coloring flex_row flex_wrap justify-content_center'>
        {
            new Array(6).fill(1).map((_, index) => <View className='icon-item flex_row justify-content_center' key={index}>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>)
        }
    </View>
}
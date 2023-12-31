import { View, Text, Input } from "@tarojs/components";
import { ReactElement } from "react";
import Iconfont, { NameMap } from "@/components/iconfiont";

import './index.scss'

export default function ClassifyNumber(): ReactElement {
    return <View className='classify-number-wrap flex_row flex_wrap justify-content_center'>
        <View className='classify-number flex_row flex_wrap justify-content_center'>
            {
                new Array(6).fill(1).map((_, index) => <View className='icon-item flex_column justify-content_center align-items_center' key={index}>
                    <Iconfont name={NameMap.ICON_PINGGUO} />
                </View>)
            }
        </View>
        <View className='result flex_column align-items_center'>
            <View className='result-item flex_row align-items_center'>
                <Iconfont name={NameMap.ICON_PINGGUO} />
                <Input className='result_input' />
                <Text className='result_text'>个</Text>
            </View>
        </View>
    </View>
}
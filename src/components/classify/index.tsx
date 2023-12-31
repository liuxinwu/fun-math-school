import { View, Text } from "@tarojs/components";
import { ReactElement } from "react";
import Iconfont, { NameMap } from "@/components/iconfiont";

import './index.scss'

export default function Classify(): ReactElement {
    return <View>
        <View className='classify flex_row flex_wrap justify-content_center'>
            {
                new Array(6).fill(1).map((_, index) => <View className='icon-item flex_column justify-content_center align-items_center' key={index}>
                    <Iconfont name={NameMap.ICON_PINGGUO} />
                    <Text className='number-text'>{ index + 1 }</Text>
                </View>)
            }
        </View>
        <View className='result flex_row justify-content_center'>
            <View className='result-item flex_1 bg_red'>
                <View className='title'><Text>长方形</Text></View><Text className='number-text'>1</Text>
            </View>

            <View className='result-item flex_1 bg_green'>
                <View className='title'><Text>长方形</Text></View>
                <Text className='number-text'>2</Text>
            </View>

            <View className='result-item flex_1 bg_blue'>
                <View className='title'><Text>长方形</Text></View>
                <Text className='number-text'>3</Text>
            </View>
        </View>
    </View>
}
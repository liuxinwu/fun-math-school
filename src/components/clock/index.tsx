import { View, Input, Text } from "@tarojs/components";
import { ReactElement } from "react";
import './index.scss'

export default function Clock(): ReactElement {
    return <View className='clock-wrap flex_row justify-content_center align-items_center'>
        <View className='clock'></View>
        <View className='result flex_row align-items_center'>
            <Input className='result_input' />
            <Text className='text'>时</Text>
            <Input className='result_input' />
            <Text className='text'>分</Text>
        </View>
    </View>
}
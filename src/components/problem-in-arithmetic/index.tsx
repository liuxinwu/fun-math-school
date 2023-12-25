import { View, Text, Input } from "@tarojs/components";
import { ReactElement } from "react";
import './index.scss'

export default function ProblemInArithmetic(): ReactElement {
    return <View className='problem-in-arithmetic flex_row justify-content_center'>
        <Text>2</Text>
        <Text className='operator'>+</Text>
        <Text>3</Text>
        <Text className='operator'>=</Text>
        <Input className='result'></Input>
    </View>
}
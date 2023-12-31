import { View, Text, Input } from '@tarojs/components';
import { ReactElement } from 'react';
import './index.scss'

export default function CompareSizes(): ReactElement {
    return <View className='compare-sizes flex_row justify-content_center'>
    <Text className='operator'>2</Text>
    <Input className='result'></Input>
    <Text className='operator'>5</Text>
</View>
}
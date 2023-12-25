import { View, Text, Image } from '@tarojs/components';
import { ReactElement } from 'react';
import ProblemInArithmetic from '@/components/problem-in-arithmetic';
import { Button } from '@nutui/nutui-react-taro';
import panda from '@/assets/theme/panda-1.png'
import bubble from '@/assets/theme/bubble.png'

import './index.scss';

export default function Answer(): ReactElement {
    // 真离谱通过变量解析就可以换行，直接在模板里面下 \n 不识别
    const tips = '小主，认真答题\n哦！你是最\n棒的！'

    return <View className='answer-wrap bg_primary flex_column align-items_center'>
        <View className='header-wrap'>
            <Text className='title p-top_20 p-row_20'>1-5 之间的加法</Text>
            <Text className='title-desc p-row_20'>失败是成功之母，只有不怕失败，才能不断成长，不断突破自我。</Text>
       </View>

       <View className='answer-main flex_column flex_1'>
            <View className='answer-main_header flex_row justify-content_space_between p-row_20'>
                <Text>第 1 题，共 20 题</Text>
                <View>
                    <Text>已用时：</Text>
                    <Text className='countdown'>20:21</Text>
                </View>
            </View>

            <Text className='des p-row_20'>小主：发挥你的聪明才智，请用最快的速度将答案填入方框种哦！</Text>
            
            <View className='question flex_1'>
                <ProblemInArithmetic />
            
                <View className='btn-group flex_row justify-content_flex_end p-row_20'>
                    <Button type='primary'>上一题</Button>
                    <Button type='primary'>下一题</Button>
                    <Button type='primary'>提  交</Button>
                </View>
            </View>

            <View className='footer flex_row justify-content_flex_end'>
                <Image src={bubble} className='bubble'></Image>
                <View className='tips'>{tips}</View>
                <Image src={panda} className='panda'></Image>
            </View>
       </View>
    </View>
}
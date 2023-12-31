import { Text, View } from "@tarojs/components";
import classnames from "classnames";
import { ReactElement } from "react";
import './index.scss'

export default function WrongQuestion(): ReactElement {
    return <View className={classnames('index-wrap bg_primary flex_column align-items_center p-row_20', process.env.TARO_ENV === 'h5' && 'index-wrap_h5')}>
        <View className='item flex_row justify-content_center'>
            <View className='cover'></View>
            <View className='content flex_column flex_1'>
                <Text className='title'>24点</Text>
                <Text className='desc'>24点游戏方式简单易学，能健脑益智，是一项极为有益的活动。</Text>
            </View>
        </View>

        <View className='item flex_row justify-content_center'>
            <View className='cover'></View>
            <View className='content flex_column flex_1'>
                <Text className='title'>数字华容道</Text>
                <Text className='desc'>华容道是古老的中国民间益智游戏，以其变化多端、百玩不厌的特点与魔方、独立钻石一起被国外智力专家并称为“智力游戏界的三个不可思议”。</Text>
            </View>
        </View>
    </View>
}

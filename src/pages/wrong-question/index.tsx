import Iconfont, { NameMap } from "@/components/iconfiont";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import './index.scss'

export default function WrongQuestion() {
    return <View className={classNames('index-wrap bg_primary flex_column align-items_center p-column_20', process.env.TARO_ENV === 'h5' && 'index-wrap_h5')}>
        <View className='time_line m-row_20'><Text>今天</Text></View>
        <View className='question-item m-row_20 flex_column justify-content_space_between m-bottom_20'>
            <View className='flex_row'>
                <Text className='title flex_1'>小明有5个苹果，小红有3个苹果，问小明比小红多几个苹果？</Text>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row justify-content_space_between'>
                <Text className='desc'>算术题</Text>
                <Text className='desc'>10:56</Text>
            </View>
        </View>
        <View className='question-item m-row_20 flex_column justify-content_space_between m-bottom_20'>
            <View className='flex_row'>
                <Text className='title flex_1'>小明有5个苹果，小红有3个苹果，问小明比小红多几个苹果？</Text>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row justify-content_space_between'>
                <Text className='desc'>算术题</Text>
                <Text className='desc'>10:56</Text>
            </View>
        </View>
        <View className='question-item m-row_20 flex_column justify-content_space_between m-bottom_20'>
            <View className='flex_row'>
                <Text className='title flex_1'>小明有5个苹果，小红有3个苹果，问小明比小红多几个苹果？</Text>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row justify-content_space_between'>
                <Text className='desc'>算术题</Text>
                <Text className='desc'>10:56</Text>
            </View>
        </View>

        <View className='time_line m-row_20'><Text>昨天</Text></View>
        <View className='question-item m-row_20 flex_column justify-content_space_between m-bottom_20'>
            <View className='flex_row'>
                <Text className='title flex_1'>小明有5个苹果，小红有3个苹果，问小明比小红多几个苹果？</Text>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row justify-content_space_between'>
                <Text className='desc'>算术题</Text>
                <Text className='desc'>10:56</Text>
            </View>
        </View>
        <View className='question-item m-row_20 flex_column justify-content_space_between m-bottom_20'>
            <View className='flex_row'>
                <Text className='title flex_1'>小明有5个苹果，小红有3个苹果，问小明比小红多几个苹果？</Text>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row justify-content_space_between'>
                <Text className='desc'>算术题</Text>
                <Text className='desc'>10:56</Text>
            </View>
        </View>
        <View className='question-item m-row_20 flex_column justify-content_space_between m-bottom_20'>
            <View className='flex_row'>
                <Text className='title flex_1'>小明有5个苹果，小红有3个苹果，问小明比小红多几个苹果？</Text>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row justify-content_space_between'>
                <Text className='desc'>算术题</Text>
                <Text className='desc'>10:56</Text>
            </View>
        </View>
        <View className='question-item m-row_20 flex_column justify-content_space_between m-bottom_20'>
            <View className='flex_row'>
                <Text className='title flex_1'>小明有5个苹果，小红有3个苹果，问小明比小红多几个苹果？</Text>
                <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row justify-content_space_between'>
                <Text className='desc'>算术题</Text>
                <Text className='desc'>10:56</Text>
            </View>
        </View>
    </View>
}

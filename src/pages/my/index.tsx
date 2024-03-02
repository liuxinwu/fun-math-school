import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import Iconfont, { NameMap } from "@/components/iconfiont";
import {AtAvatar} from "taro-ui";
import './index.scss'

export default function WrongQuestion() {
    return <View className={classnames('index-wrap bg_primary flex_column align-items_center p-row_20', process.env.TARO_ENV === 'h5' && 'index-wrap_h5')}>
        <View className='userinfo flex_row'>
            <AtAvatar image='https://jdc.jd.com/img/200' circle size='small'></AtAvatar>
            <View className='main flex_column'>
              <Text className='name'>哦哦先生</Text>
              <Text className='desc'>不管结果如何，一搏无悔!</Text>
            </View>
        </View>

        <View className='flex_row block'>
          <View className='cell flex_column flex_1 m-right_10 justify-content_space_between'>
            <View className='flex_row justify-content_space_between align-items_center'>
              <Text className='title'>学币</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row align-items_center'>
              <Text className='desc'>1000</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>
          </View>

          <View className='cell flex_column flex_1 m-left_10 justify-content_space_between'>
            <View className='flex_row justify-content_space_between align-items_center'>
              <Text className='title'>学币</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row align-items_center'>
              <Text className='desc'>1000</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>
          </View>
        </View>

        <View className='flex_row block'>
          <View className='cell flex_column flex_1 m-right_10 justify-content_space_between'>
            <View className='flex_row justify-content_space_between align-items_center'>
              <Text className='title'>学币</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row align-items_center'>
              <Text className='desc'>1000</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>
          </View>

          <View className='cell flex_column flex_1 m-left_10 justify-content_space_between'>
            <View className='flex_row justify-content_space_between align-items_center'>
              <Text className='title'>学币</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>

            <View className='flex_row align-items_center'>
              <Text className='desc'>1000</Text>
              <Iconfont name={NameMap.ICON_PINGGUO} />
            </View>
          </View>
        </View>

        <View className='block_btn flex_row center'>
          <Text>关于我们</Text>
        </View>
    </View>
}

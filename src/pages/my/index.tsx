import { View } from "@tarojs/components";
import classnames from "classnames";
import './index.scss'

export default function WrongQuestion() {
    return <View className={classnames('index-wrap bg_primary flex_column align-items_center', process.env.TARO_ENV === 'h5' && 'index-wrap_h5')}>
        <View className='userinfo'>
            <View className=''></View>
        </View>
    </View>
}
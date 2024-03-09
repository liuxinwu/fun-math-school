import { ReactElement, useEffect } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import classnames from 'classnames'
import CARTOON_FIGURE_1 from '@/assets/images/cartoon-figure/cartoon-figure-1.png'
import CARTOON_FIGURE_2 from '@/assets/images/cartoon-figure/cartoon-figure-2.png'
import CARTOON_FIGURE_3 from '@/assets/images/cartoon-figure/cartoon-figure-3.png'
import CARTOON_FIGURE_4 from '@/assets/images/cartoon-figure/cartoon-figure-4.png'
import CARTOON_FIGURE_5 from '@/assets/images/cartoon-figure/cartoon-figure-5.png'
import THEME_1 from '@/assets/images/theme/theme-1.png'
import Taro from '@tarojs/taro'
import SelectBook from './components/select-book'

import './index.scss'

export default function Index(): ReactElement {
  const catalogue = [
    [
      {
        img: CARTOON_FIGURE_1,
        text: '算术题'
      },
      {
        img: CARTOON_FIGURE_2,
        text: '比较大小'
      },
    ],
    [
      {
        img: CARTOON_FIGURE_3,
        text: '学习钟表'
      },
    ],
    [
      {
        img: CARTOON_FIGURE_4,
        text: '分类'
      },
      {
        img: CARTOON_FIGURE_5,
        text: '认识图形'
      },
    ]
  ]

  const genreateClass = (length: number, index: number): string => {
    const baseClass = 'catalogue-item flex_row justify-content_center align-items_center flex_1'
    if (length === 1) return classnames(baseClass, 'm-row_10', 'catalogue-item_filling')
    if (index === 0) return classnames(baseClass, 'm-right_10')
    if (index === 1) return classnames(baseClass, 'm-left_10 m-top_20')
    return classnames(baseClass)
  }

  const to = () => {
    Taro.navigateTo({
      url: '/subpackage/pages/question-type/index'
    })
  }

  return <View className={classnames('index-wrap bg_primary justify-content_space_between flex_column', process.env.TARO_ENV === 'h5' && 'index-wrap_h5')}>
    <View>
      <SelectBook />

      <View className='catalogue p-row_20'>
        {
          catalogue.map((_, _index) => <View className='catalogue-list flex_row' key={_index}>
            {
              _.map(({ img, text }, index) => (<View key={text} className={genreateClass(_.length, index)} onClick={to}>
                <Image src={img} mode='widthFix' className='catalogue-item_image' />
                <Text className='catalogue-item_text'>{text}</Text>
              </View>))
            }
          </View>)
        }
      </View>
    </View>

    <View className='footer-wrap'>
      <Image src={THEME_1} mode='widthFix' className='footer-img' ></Image>
    </View>
  </View>
}

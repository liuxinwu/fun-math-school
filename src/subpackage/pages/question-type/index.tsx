import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { useRef, useState, ReactElement } from 'react';
import './index.scss'

export default function QuestionType(): ReactElement {
    const [headerSticky, setHeaderSticky] = useState(false)
    const headerEl = useRef<HTMLElement>(null)
    const questionType = [
        {
            type: 1,
            text: '1-5\n之间的加法'
        },
        {
            type: 2,
            text: '1-10\n之间的加法'
        },
        {
            type: 3,
            text: '1-15\n之间的加法'
        },
        {
            type: 4,
            text: '1-20\n之间的加法'
        },
        {
            type: 5,
            text: '1-20\n之间的加减法'
        },{
            type: 6,
            text: '1-5\n之间的减法'
        },
        {
            type: 7,
            text: '1-10\n之间的减法'
        },
        {
            type: 8,
            text: '1-15\n之间的减法'
        },
        {
            type: 9,
            text: '1-20\n之间的减法'
        },
    ]

    const genreateClassName = (index: number): string => {
        if (index % 2 === 0) return ''
        return 'justify-content_flex_end'
    }

    const toAnswer = () => {
        Taro.navigateTo({ url: '/subpackage/pages/answer/index' })
    }

    Taro.usePageScroll(payload => {
        const h = headerEl.current?.offsetHeight || 0
        if (payload.scrollTop > h) return setHeaderSticky(true)
        setHeaderSticky(false)
    })

    return <View className='question-type-wrap bg_primary'>
       <View className={classNames('header-wrap', headerSticky && 'header-wrap-sticky position_sticky')} ref={headerEl}>
            <Text className='title p-top_20 p-row_20'>1-20 之间的加减法练习</Text>
            <Text className='title-desc p-row_20'>通过学习加减法，孩子们可以培养逻辑思维、数学概念、计算能力和专注力。</Text>
       </View>

        <View className='question-type-list p-row_20 p-bottom_20'>
            {
                questionType.map(({type, text}, index) => (<View className={classNames('question-type-item flex_row m-top_20', genreateClassName(index))} key={type}>
                    <View className='question-type-item_cell flex_row center' onClick={toAnswer}>{text}</View>
                </View>))
            }
        </View>
    </View>
}
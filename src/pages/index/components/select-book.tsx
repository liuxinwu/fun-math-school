import { View, Text,  } from "@tarojs/components";
import classNames from "classnames";
import { PropsWithChildren, useState } from "react";
import { useRecoilState } from "recoil";
import { bookInfo } from '@/store/book';

export default function SelectBook({  }: PropsWithChildren<{
  grade: number
}>) {
  const [visible, setVisible] = useState(false)
  const [_bookInfo, setBookInfo] = useRecoilState<Store.BookInfoType>(bookInfo)

  return <>
    <View className='title-wrap align-items_flex-end p-row_20' onClick={() => (setVisible(!visible), setBookInfo({
      ..._bookInfo,
      book: 1,
    }))}>
      <Text className='title-text'>一年级上册{_bookInfo.book}</Text>

      <View className={classNames('at-icon', visible ? 'at-icon-chevron-down' : 'at-icon-chevron-up')} ></View>
    </View>

    
  </>
}

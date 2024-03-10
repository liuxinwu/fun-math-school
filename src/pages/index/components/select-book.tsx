import { View, Text, Picker } from "@tarojs/components";
import classNames from "classnames";
import { PropsWithChildren, useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { bookInfoState } from '@/store/book';
import { getBookListApi } from "@/api/book";

export default function SelectBook({  }: PropsWithChildren<{
  grade: number
}>) {
  const [visible, setVisible] = useState(false)
  const [bookInfo, setBookInfo] = useRecoilState<Store.BookInfoType>(bookInfoState)
  const [bookList, setBookList] = useState<string[][]>([])
  const [selectValue, setSelectValue] = useState([])
  const allBooks = useRef<Api.BookListType[]>([])

  const handleChange = (e) => {
    const [i, j] = e.detail.value
    setBookInfo({
      ...bookInfo,
      book: allBooks.current[i].bookClassifyInfo[j].sourceId,
    })
  }

  const handleColumnChange = val => {
    const { detail: { column, value }} = val
    console.log(column, value)
    setSelectValue([column, value])

    if (!column) return

    const book = getBook(allBooks.current, value)
    setBookList([bookList[0], book])
  }

  const getBook = (target: Api.BookListType[], index: number) => {
    return target[index].bookClassifyInfo.map(({ gradeName }) => gradeName)
  }

  useEffect(() => {
    const getBookList = async () => {
      const data = await getBookListApi<Api.BookListType[]>()

      allBooks.current = data.data
      setBookList([data.data.map(({ name }) => name), getBook(data.data, 0)])
    }
    getBookList()
  }, [])

  return <>
    <Picker mode='multiSelector' range={bookList} value={selectValue} onChange={handleChange} onColumnChange={handleColumnChange}>
      <View className='title-wrap align-items_flex-end p-row_20' onClick={() => (setVisible(!visible))}>
        <Text className='title-text'>一年级上册</Text>

        <View className={classNames('at-icon', visible ? 'at-icon-chevron-down' : 'at-icon-chevron-up')} ></View>
      </View>
    </Picker>
  </>
}



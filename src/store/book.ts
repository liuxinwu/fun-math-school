import { atom } from "recoil";

export const bookInfoState = atom<Store.BookInfoType>({
  key: 'bookInfoState',
  default: {
    book: '',
    chapter: null,
    subChapter: null,
  }
})

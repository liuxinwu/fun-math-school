import { atom } from "recoil";

export const bookInfo = atom<BookInfoType>({
  key: 'bookInfo',
  default: {
    book: null,
    chapter: null,
    subChapter: null,
  }
})
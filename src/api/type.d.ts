declare namespace Api {
  interface BookListType {
    type: number
    name: string
    bookClassifyInfo: {
      gradeName: string
      gradeType: number
      tId: number
      tName: string
      sourceId: string
    }[]
  }
}

import { service } from "@/utils/request/inex"

export const getBookListApi = async <T>() => {
  return service.get<T>({
    url: 'book-version/find'
  })
}

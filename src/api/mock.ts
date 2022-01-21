import { http } from '@/core/request'

export const mockApi = (userId: string | number) => {
  return http.get('https://jsonplaceholder.typicode.com/posts', {
    userId: userId
  })
}

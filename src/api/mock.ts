import { http } from '@/core/http'

export const mockApi = (userId: string | number) => {
  return http.get('https://jsonplaceholder.typicode.com/posts', {
    userId: userId
  })
}

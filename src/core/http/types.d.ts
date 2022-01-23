export type RequestMethods = Extract<
  Method,
  'get' | 'post' | 'put' | 'delete' | 'option' | 'head'
>

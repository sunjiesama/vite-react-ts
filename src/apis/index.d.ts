declare interface Result<T> {
  code: '200' | '500'
  message: string
  data: T | null
}

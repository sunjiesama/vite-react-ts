import request from 'umi-request'

export const GetUser = async (): Promise<{ username: string }> => {
  return await request.get('/user')
}

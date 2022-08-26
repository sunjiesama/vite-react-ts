import request from 'umi-request'

export const GetBarChartData = async (): Promise<Result<string[]>> => {
  return await request.get('/barChartData')
}

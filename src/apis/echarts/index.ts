import request from 'umi-request'
import type { IGetBarChartData } from '@/apis/echarts/type'

export const GetBarChartData = async (): Promise<Result<IGetBarChartData.Data[]>> => {
  return await request.get('/barChartData')
}

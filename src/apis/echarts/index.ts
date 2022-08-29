import type { IGetBarChartData } from '@/apis/echarts/type'
import request from 'umi-request'

export const GetBarChartData = async (): Promise<Result<IGetBarChartData.Data[]>> => {
  return await request.get('/barChartData')
}

export const GetPieChartData = async (): Promise<Result<any>> => {
  return await request.get('/PieChartData')
}

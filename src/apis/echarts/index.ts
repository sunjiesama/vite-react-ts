import type { IGetBarChartData } from "@/apis/echarts/type";
import request from "umi-request";

export const GetBarChartData = async (): Promise<
  Result<IGetBarChartData.Data[]>
> => {
  return await request.get("/echarts/barChartData");
};

export const GetPieChartData = async (): Promise<Result> => {
  return await request.get("/echarts/PieChartData");
};

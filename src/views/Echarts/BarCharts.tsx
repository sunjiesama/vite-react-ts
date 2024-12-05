import { GetBarChartData } from "@/apis/echarts";
import { Spin } from "antd";
import * as echarts from "echarts";
import React, { useEffect, useRef, useState } from "react";

const ColumnChart: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const echartsRef = useRef<HTMLDivElement>(null);
  let myChart: echarts.EChartsType;
  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: "axis",

      // 坐标轴指示器配置项。
      axisPointer: {
        // 'line' 直线指示器
        // 'shadow' 阴影指示器
        // 'none' 无指示器
        // 'cross' 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",

        // 隐藏X轴刻度线
        axisTick: {
          show: false,
        },
        // 隐藏X轴线
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        // 隐藏Y轴网格线
        splitLine: { show: false },

        // 隐藏Y轴
        show: false,
        type: "value",
      },
    ],
  };

  useEffect(() => {
    if (myChart === null || myChart === undefined) {
      myChart = echarts.init(echartsRef.current as HTMLDivElement);
    }
    myChart.setOption(option);
    void GetBarChartData().then((res) => {
      if (res.code === "200") {
        const list = res.data ?? [];
        myChart.setOption({
          xAxis: [
            {
              data: list[0]?.value.map((i) => i.month),
              // 隐藏刻度线
              axisTick: {
                show: false,
              },
              // 隐藏轴线
              axisLine: {
                show: false,
              },
            },
          ],
          series: list.map((v) => {
            return {
              // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
              name: v.name,

              // 图表类型，设置为line时，将设置为折线图
              type: "bar",

              // 柱子的宽度
              barWidth: 30,

              // 数据堆叠,同一名称的数据将被堆叠展示
              stack: v.type,

              // 'samesign' 只在要堆叠的值与当前累积的堆叠值具有相同的正负符号时才堆叠。
              // 'all' 堆叠所有的值，不管当前或累积的堆叠值的正负符号是什么。
              // 'positive' 只堆积正值。
              // 'negative' 只堆叠负值。
              stackStrategy: "samesign",

              // 标记线
              markLine: {
                lineStyle: {
                  type: "dashed",
                },
                data: [[{ type: "min" }, { type: "max" }]],
              },
              tooltip: {
                valueFormatter: (value: number) => `${value} $`,
              },
              // 高亮的图形样式和标签样式
              emphasis: {
                // 开启高亮状态可以在鼠标移到图形上时，tooltip 触发时，或者图例联动的时，触发高亮效果
                disabled: false,

                // 'none' 不淡出其它图形，默认使用该配置。
                // 'self' 只聚焦（不淡出）当前高亮的数据的图形。
                // 'series' 聚焦当前高亮的数据所在的系列的所有图形。
                focus: "series",
              },
              data: v.value.map((v) => v.value),
            };
          }),
        });
        setLoading(false);
      }
    });

    // const echartsResize = (): void => {
    //   if (option !== null) {
    //     myChart.resize()
    //   }
    // }
    // window.addEventListener('resize', echartsResize, false)
    //
    // return () => {
    //   window.removeEventListener('resize', echartsResize)
    //   if (myChart !== null) {
    //     myChart.dispose()
    //   }
    // }
  }, []);

  return (
    <div className="w-full h-full">
      {loading && (
        <Spin
          spinning={loading}
          className="w-full h-full absolute z-10 flex items-center bg-white/30 justify-center"
        />
      )}
      <div ref={echartsRef} className="w-full h-full" />
    </div>
  );
};

export default ColumnChart;

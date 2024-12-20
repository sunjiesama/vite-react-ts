import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const PieChart: React.FC = () => {
  const echartsRef = useRef<HTMLDivElement>(null);
  let myChart: echarts.EChartsType;
  const option: echarts.EChartsOption = {
    // 图表表头
    title: {
      text: "Referer of a Website\n test",
      subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "center",
      top: "bottom",
      data: [
        "rose 1",
        "rose 2",
        "rose 3",
        "rose 4",
        "rose 5",
        "rose 6",
        "rose 7",
        "rose 8",
      ],
      textStyle: {
        color: "#a1a1a1",
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Radius Mode",
        type: "pie",

        // 圆环粗细
        radius: ["60%", "70%"],

        // 是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
        // 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
        // 'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
        roseType: "radius",
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { value: 40, name: "rose 1" },
          { value: 33, name: "rose 2" },
          { value: 28, name: "rose 3" },
          { value: 22, name: "rose 4" },
          { value: 20, name: "rose 5" },
          { value: 15, name: "rose 6" },
          { value: 12, name: "rose 7" },
          { value: 10, name: "rose 8" },
        ],
      },
    ],
  };

  const setEcharts = (): void => {
    if (option !== null) {
      myChart.setOption(option);
    }
  };

  useEffect(() => {
    myChart = echarts.init(echartsRef.current as HTMLDivElement);
    const echartsResize = (): void => {
      if (myChart !== null) {
        myChart.resize();
      }
    };
    window.addEventListener("resize", echartsResize, false);

    setEcharts();
    return () => {
      window.removeEventListener("resize", echartsResize);
      if (myChart !== null) {
        myChart.dispose();
      }
    };
  }, []);

  return <div ref={echartsRef} className="w-full h-full"></div>;
};

export default PieChart;

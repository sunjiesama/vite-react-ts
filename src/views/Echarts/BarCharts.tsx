/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as echarts from 'echarts'
import React, { useEffect, useRef } from 'react'

const ColumnChart: React.FC = () => {
  const echartsRef = useRef<HTMLDivElement>(null)
  let myChart: echarts.EChartsType
  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        name: 'Direct',

        // 图表类型，设置为line时，将设置为折线图
        type: 'bar',
        barWidth: 10,

        // 数据堆叠,同一名称的数据将被堆叠展示
        stack: 'Search Engine',

        // 'samesign' 只在要堆叠的值与当前累积的堆叠值具有相同的正负符号时才堆叠。
        // 'all' 堆叠所有的值，不管当前或累积的堆叠值的正负符号是什么。
        // 'positive' 只堆积正值。
        // 'negative' 只堆叠负值。
        stackStrategy: 'samesign',

        // 高亮的图形样式和标签样式
        emphasis: {
          // 开启高亮状态可以在鼠标移到图形上时，tooltip 触发时，或者图例联动的时，触发高亮效果
          disabled: false,

          // 'none' 不淡出其它图形，默认使用该配置。
          // 'self' 只聚焦（不淡出）当前高亮的数据的图形。
          // 'series' 聚焦当前高亮的数据所在的系列的所有图形。
          focus: 'none',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Baidu',
        type: 'bar',

        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120],
      },
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series',
        },
        markLine: {
          lineStyle: {
            type: 'dashed',
          },
          data: [[{ type: 'min' }, { type: 'max' }]],
        },
      },

      {
        name: 'Google',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 290, 230, 220],
      },
      {
        name: 'Bing',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: [60, 72, 71, 74, 190, 130, 110],
      },
      {
        name: 'Others',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },

        data: [62, 82, 91, 84, 109, 110, 120],
      },
    ],
  }

  const setEcharts = (): void => {
    if (option !== null) {
      myChart.setOption(option)
    }
  }

  useEffect(() => {
    myChart = echarts.init(echartsRef.current as HTMLDivElement)
    const echartsResize = (): void => {
      if (option !== null) {
        myChart.resize()
      }
    }
    window.addEventListener('resize', echartsResize, false)

    setEcharts()
    return () => {
      window.removeEventListener('resize', echartsResize)
      if (myChart !== null) {
        myChart.dispose()
      }
    }
  }, [])

  return <div ref={echartsRef} className="w-full h-full" />
}

export default ColumnChart

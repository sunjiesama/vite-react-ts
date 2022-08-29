/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { mock } from 'mockjs'
import { rest } from 'msw'

export default [
  rest.get('/barChartData', (req, res, ctx) => {
    const month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

    const mockMonthData = (upperLimit: number) => {
      return month.map((month) => ({
        month,
        [`value|10-${upperLimit}`]: 10,
      }))
    }

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        mock({
          code: '200',
          message: 'ok',
          data: [
            {
              name: '美食',
              type: 'expense',
              value: mockMonthData(500),
            },
            {
              name: '服装',
              type: 'expense',
              value: mockMonthData(1000),
            },
            {
              name: '出行',
              type: 'expense',
              value: mockMonthData(100),
            },
            {
              name: '加班',
              type: 'income',
              value: mockMonthData(1000),
            },
            {
              name: '奖金',
              type: 'income',
              value: mockMonthData(1000),
            },
            {
              name: '补贴',
              type: 'income',
              value: mockMonthData(500),
            },
          ],
        }),
      ),
    )
  }),
]

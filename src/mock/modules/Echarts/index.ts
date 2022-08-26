/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { mock } from 'mockjs'
import { rest } from 'msw'

export default [
  rest.get('/barChartData', (req, res, ctx) => {
    const month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

    const mockMonthData = () => {
      return month.map((i) => ({
        month: i,
        'value|100-200': 10,
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
              name: '加班',
              type: 'grant',
              value: mockMonthData(),
            },
            {
              name: '话费',
              type: 'grant',
              value: mockMonthData(),
            },
            {
              name: '餐补',
              type: 'grant',
              value: mockMonthData(),
            },
            {
              name: '分成',
              type: 'bonus',
              value: mockMonthData(),
            },
          ],
        }),
      ),
    )
  }),
]

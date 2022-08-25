import { lazy } from 'react'
import App from '../App'
import NotFound from '../views/404NotFound'

const routes: RenderRoutes[] = [
  {
    path: '/',
    title: '首页',
    component: App,
    hidden: true,
    children: [
      {
        path: '/immer',
        title: 'immer',
        component: lazy(async () => await import('@/views/Immer/index')),
      },
      {
        path: '/hooks',
        title: 'hooks',
        component: lazy(async () => await import('@/views/Hooks/index')),
      },
      {
        path: '/echarts',
        title: 'echarts',
        component: lazy(async () => await import('@/views/Echarts/index')),
        children: [
          {
            path: '/echarts/lineCharts',
            title: '折线图',
            component: lazy(async () => await import('@/views/Echarts/LineCharts')),
          },
          {
            path: '/echarts/pieCharts',
            title: '饼图',
            component: lazy(async () => await import('@/views/Echarts/PieCharts')),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    title: '404',
    hidden: true,
    component: NotFound,
  },
]

export default routes

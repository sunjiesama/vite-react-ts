import { lazy } from 'react'
import App from '../App'
import NotFound from '../views/404NotFound'
const routes: RenderRoutes[] = [
  {
    key: '/',
    label: '首页',
    component: App,
    hidden: true,
    children: [
      {
        key: '/immer',
        label: 'Immer',
        component: lazy(async () => await import('@/views/Immer/index')),

        default: true,
      },
      {
        key: '/hooks',
        label: 'Hooks',
        component: lazy(async () => await import('@/views/Hooks/index')),
      },
      {
        key: '/echarts',
        label: 'Echarts',
        component: lazy(async () => await import('@/views/Echarts/index')),

        children: [
          {
            key: '/echarts/BarCharts',
            label: 'Bar',
            component: lazy(async () => await import('@/views/Echarts/BarCharts')),
            default: true,
          },
          {
            key: '/echarts/pieCharts',
            label: 'Pie',
            component: lazy(async () => await import('@/views/Echarts/PieCharts')),
          },
        ],
      },
    ],
  },
  {
    key: '*',
    label: '404',
    hidden: true,
    component: NotFound,
  },
]

export default routes

import { lazy } from 'react'
import App from '../App'
import NotFound from '../views/404NotFound'

const routes: RenderRoutes[] = [
  {
    path: '/',
    title: '首页',
    component: App,
    hidden: true,
    icon: false,
    children: [
      {
        path: '/immer',
        title: 'Immer',
        component: lazy(async () => await import('@/views/Immer/index')),
        icon: 'logos:immer-icon',
        default: true,
      },
      {
        path: '/hooks',
        title: 'Hooks',
        icon: 'fluent-emoji-flat:hook',
        component: lazy(async () => await import('@/views/Hooks/index')),
      },
      {
        path: '/echarts',
        title: 'Echarts',
        icon: 'simple-icons:apacheecharts',
        component: lazy(async () => await import('@/views/Echarts/index')),
        children: [
          {
            path: '/echarts/BarCharts',
            title: 'Bar',
            icon: 'material-symbols:bar-chart-rounded',
            component: lazy(async () => await import('@/views/Echarts/BarCharts')),
            default: true,
          },
          {
            path: '/echarts/pieCharts',
            title: 'Pie',
            icon: 'icon-park:pie-two',
            component: lazy(async () => await import('@/views/Echarts/PieCharts')),
          },
        ],
      },
      {
        path: '/nested',
        title: 'Nested',
        icon: 'fluent:squares-nested-20-filled',
        component: lazy(async () => await import('@/views/Nested/index')),
        children: [
          {
            path: '/nested/nest-1',
            title: 'nested-1',
            icon: false,
            component: lazy(async () => await import('@/views/Nested/Nest-1')),
            children: [
              {
                path: '/nested/nest-1/nest-1-1',
                title: 'nested-1-1',
                icon: false,
                component: lazy(async () => await import('@/views/Nested/Nest-1/Nest-1-1')),
              },
            ],
          },
          {
            path: '/nested/nest-2',
            title: 'nested-2',
            icon: false,
            component: lazy(async () => await import('@/views/Nested/Nest-2')),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    title: '404',
    hidden: true,
    icon: false,
    component: NotFound,
  },
]

export default routes

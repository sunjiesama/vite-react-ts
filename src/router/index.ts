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
      {
        path: '/map',
        title: 'map',
        icon: 'material-symbols:map',
        component: lazy(async () => await import('@/views/Map/index')),
        children: [
          {
            path: '/map/base-demo',
            title: 'baseDemo',
            icon: false,
            component: lazy(async () => await import('@/views/Map/BaseMap')),
          },
          {
            path: '/map/mark-demo',
            title: 'markDemo',
            icon: false,
            component: lazy(async () => await import('@/views/Map/MarkMap')),
          },
        ],
      },
      {
        path: '/three',
        title: 'three',
        icon: 'logos:threejs',
        component: lazy(async () => await import('@/views/Three/index')),
      },
      {
        path: '/unity3D',
        title: 'unity3D',
        icon: 'mdi:unity',
        component: lazy(async () => await import('@/views/Unity/index')),
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

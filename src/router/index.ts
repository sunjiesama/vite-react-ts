import React from 'react'
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
        component: React.lazy(async () => await import('@/views/Immer/index')),
      },
      {
        path: '/hooks',
        title: 'hooks',
        component: React.lazy(async () => await import('@/views/Hooks/index')),
      },
      {
        path: '/echarts',
        title: 'echarts',
        component: React.lazy(async () => await import('@/views/Echarts/index')),
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

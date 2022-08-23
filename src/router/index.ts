import React from 'react'
import App from '../App'
import NotFound from '../views/notFound'
const routes: RenderRoutes[] = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/expenses',
        component: React.lazy(async () => await import('@/views/expenses')),
        children: [
          { path: '/expenses/ex-1', component: React.lazy(async () => await import('@/views/ex-1')) },
          { path: '/expenses/ex-2', component: React.lazy(async () => await import('@/views/ex-2')) },
        ],
      },
      {
        path: '/invoices',
        component: React.lazy(async () => await import('@/views/invoices')),
        children: [
          { path: '/invoices/in-1', component: React.lazy(async () => await import('@/views/in-1')) },
          { path: '/invoices/in-2', component: React.lazy(async () => await import('@/views/in-2')) },
        ],
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes

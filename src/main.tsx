import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from '@/router/index'
import RenderRouter from '@/renderRouter'
import { worker } from './mock/browser'
import './index.css'

if (import.meta.env.DEV) {
  void worker.start({ onUnhandledRequest: 'bypass' })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>{RenderRouter(routes)}</React.StrictMode>,
)

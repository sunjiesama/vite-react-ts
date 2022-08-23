import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from '@/router/index'
import RenderRouter from '@/renderRouter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>{RenderRouter(routes)}</React.StrictMode>,
)

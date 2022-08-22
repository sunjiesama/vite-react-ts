import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'uno.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Expenses from './views/expenses'
import Expenses1 from './views/ex-1'
import Expenses2 from './views/ex-2'
import Invoices from './views/invoices'
import Invoices1 from './views/in-1'
import Invoices2 from './views/in-2'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/expenses" element={<Expenses />}>
            <Route path="/expenses/ex-1" element={<Expenses1 />} />
            <Route path="/expenses/ex-2" element={<Expenses2 />} />
          </Route>

          <Route path="/invoices" element={<Invoices />}>
            <Route path="/invoices/in-1" element={<Invoices1 />} />
            <Route path="/invoices/in-2" element={<Invoices2 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

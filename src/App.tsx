import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <nav className="border-b-1 border-solid pb-4">
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
        <Outlet />
      </nav>
    </div>
  )
}

export default App

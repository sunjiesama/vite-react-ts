import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <nav className="p-8">
        <button className="btn btn-active btn-accent btn-sm">
          <Link to="/invoices">Invoices</Link>
        </button>

        <button className="btn btn-active btn-accent btn-sm">
          <Link to="/expenses">Expenses</Link>
        </button>
        <Outlet />
      </nav>
    </div>
  )
}

export default App

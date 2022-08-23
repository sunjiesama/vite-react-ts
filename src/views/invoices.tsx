import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <main>
      <h2>Invoices</h2>
      <Link to="/invoices/in-1">in-1</Link> | <Link to="/invoices/in-2">in-2</Link>
      <Outlet />
    </main>
  )
}

export default Index

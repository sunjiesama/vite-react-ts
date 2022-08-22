import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <main className="px-4">
      <h2>Expenses</h2>
      <Link to="/expenses/ex-1">ex-1</Link> | <Link to="/expenses/ex-2">ex-2</Link>
      <Outlet />
    </main>
  )
}

export default Index

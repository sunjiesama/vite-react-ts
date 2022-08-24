import React from 'react'
import { Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <main className="p-4">
      <Outlet />
    </main>
  )
}

export default Index

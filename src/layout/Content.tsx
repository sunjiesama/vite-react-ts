import React from 'react'
import { Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <main className="p-4 flex justify-end">
      <Outlet />
    </main>
  )
}

export default Index

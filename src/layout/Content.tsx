import React from 'react'
import { Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <main className="p-4 w-full h-full">
      <Outlet />
    </main>
  )
}

export default Index

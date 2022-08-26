import React from 'react'
import { Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <div className="p-10 m-10 bg-sky-300">
      <span className="text-red-900">Nested</span>
      <Outlet></Outlet>
    </div>
  )
}
export default Index

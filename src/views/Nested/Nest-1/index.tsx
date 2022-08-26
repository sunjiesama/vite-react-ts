import React from 'react'
import { Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <div className="p-10 m-10 bg-sky-200">
      <span className="text-red-700">Nest-1</span>
      <Outlet></Outlet>
    </div>
  )
}
export default Index

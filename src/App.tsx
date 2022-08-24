import React from 'react'
import Sider from '@/layout/Sider'
import Content from '@/layout/Content'

const App: React.FC = () => {
  return (
    <main className="grid grid-cols-9 h-full grid-row1">
      <div className="col-span-1 row-span-1 border-r-2">
        <Sider />
      </div>
      <div className="col-span-8 row-span-1 overflow-auto">
        <Content />
      </div>
    </main>
  )
}

export default App

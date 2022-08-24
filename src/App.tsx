import React from 'react'
import Sider from '@/layout/Sider'
import Content from '@/layout/Content'

const App: React.FC = () => {
  return (
    <main className="grid grid-cols-9 h-full grid-row1">
      <div className="col-span-1 bg-base-200 row-span-1">
        <Sider />
      </div>
      <div className="col-span-8 bg-base-300  row-span-1">
        <Content />
      </div>
    </main>
  )
}

export default App

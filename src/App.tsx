import React from 'react'
import Sider from '@/layout/Sider'
import Content from '@/layout/Content'
import { Icon } from '@iconify/react'

const App: React.FC = () => {
  return (
    <main className="grid grid-cols-9 h-full grid-row1">
      <div className="col-span-1 row-span-1 border-r-2 flex flex-col">
        <Sider />
        <div className="flex items-center justify-center py-4 ">
          <label className="btn btn-sm btn-accent btn-circle swap swap-rotate">
            <input type="checkbox" />
            <Icon className="swap-off fill-current w-6 h-6" icon="material-symbols:close"></Icon>
            <Icon className="swap-on fill-current  w-6 h-6" icon="ic:baseline-menu-open"></Icon>
          </label>
        </div>
      </div>
      <div className="col-span-8 row-span-1 overflow-auto">
        <Content />
      </div>
    </main>
  )
}

export default App

import Main from '@/layout/Main'
import Menu from '@/layout/Menu'
import { Icon } from '@iconify/react'
import { Layout } from 'antd'
import React, { useState } from 'react'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed] = useState(false)
  return (
    <Layout className="h-full">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu />
      </Sider>
      <Layout>
        <Header className="bg-white">
          <div className="h-full flex items-center">
            <Icon className="text-black h-8 w-8" icon="ion:social-snapchat-outline" />
          </div>
        </Header>
        <Content>
          <Main />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App

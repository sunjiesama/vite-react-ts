import Head from '@/layout/Head'
import Main from '@/layout/Main'
import Menu from '@/layout/Menu'
import { Layout } from 'antd'
import React, { useState } from 'react'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed] = useState(false)
  return (
    <Layout className="h-full">
      <Sider trigger={null} collapsible collapsed={collapsed} className="bg-white">
        <Menu />
      </Sider>
      <Layout>
        <Header className="bg-white">
          <Head />
        </Header>
        <Content className="relative p-4 w-full h-full">
          <Main />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App

import routes from '@/router/index'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Index = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const handleClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={[pathname]}
      items={routes[0].children}
      theme="dark"
      mode="inline"
    />
  )
}

export default Index

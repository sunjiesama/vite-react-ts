import routes from '@/router/index'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Index = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
  const formatMenu = (menu: RenderRoutes[] | undefined): MenuProps['items'] => {
    if (menu !== undefined) {
      return menu.map((iMenu) => {
        const { title, path, icon, children } = iMenu
        return {
          label: title,
          key: path,
          icon:
            icon === null || icon === false ? (
              icon
            ) : (
              <Icon className="text-black h-4 w-4" icon={icon ?? 'flat-color-icons:about'} />
            ),
          children: formatMenu(children),
        }
      })
    }
  }

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const handleClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={[pathname]}
      items={formatMenu(routes[0].children)}
      theme="light"
      mode="inline"
    />
  )
}

export default Index

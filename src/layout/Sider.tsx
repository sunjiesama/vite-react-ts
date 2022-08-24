import router from '@/router/index'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Index = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
  const { pathname } = useLocation()

  const renderMenu = (R: RenderRoutes[] | undefined): React.ReactElement | undefined => {
    if (R?.length === 0) return
    return (
      <ul className="menu bg-base-100 h-full">
        {R?.filter((v) => v.hidden !== true).map((router) => {
          const { children, path, title } = router
          if (children !== undefined && children?.length > 0) {
            return (
              <li key={path} className={pathname === path ? 'bordered' : ''}>
                <span>{title}</span>
                {renderMenu(children)}
              </li>
            )
          }
          return (
            <li key={path} className={pathname === path ? 'bordered' : ''}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  return renderMenu(router[0]?.children) ?? <>something is error</>
}

export default Index

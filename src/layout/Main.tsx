import React from 'react'
import { Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  // const location = useLocation()

  return (
    // <TransitionGroup>
    //   <CSSTransition key={location.key} classNames="page" timeout={300}>
    <Outlet />
    //   </CSSTransition>
    // </TransitionGroup>
  )
}

export default Index

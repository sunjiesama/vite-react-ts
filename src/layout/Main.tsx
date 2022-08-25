import React from 'react'
import { Outlet } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Index: React.FC = () => {
  // const location = useLocation()
  return (
    <main className="p-4 w-full h-full relative">
      {/* <TransitionGroup component={null}> */}
      {/*  <CSSTransition key={location.key} classNames="page" timeout={300}> */}
      {/*  */}
      {/*  </CSSTransition> */}
      {/* </TransitionGroup> */}
      <Outlet />
    </main>
  )
}

export default Index

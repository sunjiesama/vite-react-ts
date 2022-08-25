import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Index = (routes: RenderRoutes[]): React.ReactElement => {
  const render = (R: RenderRoutes[] | undefined): React.ReactElement[] | undefined => {
    if (R?.length === 0) return
    return R?.map((router) => (
      <Route
        path={router.key}
        key={router.key}
        element={
          <Suspense>
            <router.component />
          </Suspense>
        }
      >
        {render(router?.children)}
      </Route>
    ))
  }

  return (
    <BrowserRouter>
      <TransitionGroup component={null}>
        <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
          <Routes>{render(routes)}</Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  )
}

export default Index

import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Index = (routes: RenderRoutes[]): React.ReactElement => {
  const render = (R: RenderRoutes[] | undefined): React.ReactElement[] | undefined => {
    if (R?.length === 0) return
    return R?.map((router) => (
      <Route
        key={router.key}
        path={router.key}
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
      <Routes>{render(routes)}</Routes>
    </BrowserRouter>
  )
}

export default Index

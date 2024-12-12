import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = (routes: RenderRoutes[]) => {
  const render = (
    R: RenderRoutes[] | undefined,
  ): React.ReactElement[] | undefined => {
    if (R?.length === 0) return;
    return R?.map((router) => {
      if (router.Component) {
        return (
          <Route
            key={router.path}
            path={router.path}
            element={
              <Suspense>
                <router.Component />
              </Suspense>
            }
          >
            {render(router?.children)}
          </Route>
        );
      }
      return router.children ? render(router.children) : null;
    }) as any;
  };
  return (
    <BrowserRouter>
      <Routes>{render(routes)}</Routes>
    </BrowserRouter>
  );
};

export default Index;

import { Routes, Route, Navigate } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Footer } from './components';
import { Fragment, lazy, Suspense } from 'react';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<>Loading...</>}>
      <Routes>
          {routes.map((route, i) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Element = route.element;

              return (
                  <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      element={<Guard><Element></Element></Guard>}
                  >
                    
                  </Route>
              );
          })}
      </Routes>
  </Suspense>
);

export default function Content() {
  return (
    <SideNavBarLayout title={appInfo.title}>
      <Suspense>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
          <Route
            path='*'
            element={<Navigate to='/order/menu' />}
          />
        </Routes>
      </Suspense>
      <Footer>
        Copyright © 2022-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        Order thức ăn
      </Footer>
    </SideNavBarLayout>
  );
}

const routes2 = [
  {
    exact: true,
    path: '/dashboard',
    element: lazy(() => import('./pages/home/home'))
  },
  {
    
  }
]


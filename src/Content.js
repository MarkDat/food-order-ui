import { Routes, Route, Navigate } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Footer } from './components';

export default function Content() {
  return (
    <SideNavBarLayout title={appInfo.title}>
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
      <Footer>
        Copyright © 2022-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        Order thức ăn
      </Footer>
    </SideNavBarLayout>
  );
}


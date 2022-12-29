import { Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import appInfo from './app-info';
import { Footer } from './components';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import routes  from './app-routes';
import { useNavigation } from './contexts/navigation';

export default function Content() {
	const location = useLocation();
	const { setNavigationData } = useNavigation();

	// Set navigation
	useEffect(() => {
		console.log("Location changed: ", location);
		setNavigationData({ currentPath: location.pathname });
	}, [location, setNavigationData]);

	return (
		<SideNavBarLayout title={appInfo.title}>
			<Suspense fallback="LOADING...">
				{useRoutes(routes)}
			</Suspense>
			<Footer>
				Copyright © 2022-{new Date().getFullYear()} {appInfo.title} Inc.
				<br />
				Order thức ăn
			</Footer>
		</SideNavBarLayout>
	);
}


import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const routes = [
	{
        path: '/dashboard',
        element: lazyLoadRoutes('./pages/home/home')
    },
	{
		path: '/orders',
		element: lazyLoadRoutes('./pages/orders/orders'),
		children: [
			{
				index: true,
				element: lazyLoadRoutes('./pages/orders/list/list')
			},
			{
				path: ':orderId',
				element: lazyLoadRoutes('./pages/orders/details/order-details')
			}
		]
	},
	{
		path: '/payment',
		element: lazyLoadRoutes('./pages/payment/payment')
	},
	{
		path: '/setting',
		element: lazyLoadRoutes('./pages/setting/setting')
	},
	{
		path:'*',
		element: <Navigate to='/orders' />
	}
];


// lazy loading
export function lazyLoadRoutes(path) {
	let LazyElement = lazy(() => import(`${path}`));

	return (
		<Suspense fallback="Loading...">
			<LazyElement />
		</Suspense>
	);
}

export default routes;
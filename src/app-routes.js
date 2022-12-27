import { HomePage, TasksPage, ProfilePage, OrdersPage, MenuPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/orders',
        element: OrdersPage
    },
    {
        path: '/orders/menu',
        element: MenuPage
    },
    {
        path: '/dashboard',
        element: HomePage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});

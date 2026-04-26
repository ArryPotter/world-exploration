import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

function RootLayout() {
    return (
        <>
        <Navigation />
        <Outlet />
        </>
    )
}
export default RootLayout;
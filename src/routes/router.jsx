import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../component/Dashborad/AddProduct';
import DashboardHome from '../component/Dashborad/DashboardHome';
import ManageProduct from '../component/Dashborad/ManageProduct';
import Dashbord from '../layout/Dashbord';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashbord />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct />
            },
            {
                path: '/dashboard/manage-product',
                element: <ManageProduct />
            },
        ]
    },
]);

export default router;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Dashborad/Sidebar';

const Dashbord = () => {
    return (
        <div className='flex gap-2'>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Dashbord;
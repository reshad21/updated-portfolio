import React from 'react';
import { Link } from 'react-router-dom';
import { dashboardItems } from '../../Data/dashboardData';

const Sidebar = () => {

    return (
        <div className='px-10 py-4 bg-slate-50 h-screen'>
            <ul className='flex flex-col gap-10'>
                {
                    dashboardItems.map((item) => <li key={item.title} className='w-full'><Link to={item.pathName} className='text-3xl border-2 px-6 py-4 text-center block border-green-600 shadow-xl'>{item.title}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Sidebar;
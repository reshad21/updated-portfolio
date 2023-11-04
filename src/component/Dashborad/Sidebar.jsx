import React from 'react';
import { Link } from 'react-router-dom';
import { dashboardItems } from '../../Data/dashboardData';

const Sidebar = () => {

    return (
        <div className='px-10 py-4 bg-slate-50 h-screen w-[15%]'>
            <ul className='flex flex-col gap-10'>
                {
                    dashboardItems.map((item) => <li key={item.title} className='w-full'><Link to={item.pathName} className='text-2xl border-2 font-semibold px-4 py-4 text-center block border-green-600 shadow-xl'>{item.title}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Sidebar;
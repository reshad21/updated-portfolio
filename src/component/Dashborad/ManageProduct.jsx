import React from 'react';
import { useGetBlogQuery } from '../../redux/features/api/apiSlice';

const ManageProduct = () => {
    const { data } = useGetBlogQuery();
    console.log(data?.data);
    return (
        <div className='w-full mt-20'>
            <table className='w-[80%] mx-auto text-2xl table border-2'>
                <th className='border-2'>
                    <td>SL.</td>
                </th>
                <th className='border-2'>
                    <td>Date</td>
                </th>
                <th className='border-2'>
                    <td>Title</td>
                </th>
                <th className='border-2'>
                    <td>Action</td>
                </th>
                <tr>
                    <td className='border-2'>1</td>
                    <td className='border-2'>3-11-2023</td>
                    <td className='border-2'>Article title</td>
                    <td className='border-2'>
                        <ul className='flex gap-4 p-4'>
                            <li><button className='btn-sm btn-outline btn-success text-2xl font-semibold shadow-md border rounded-md'>Edit</button></li>
                            <li><button className='btn-sm btn-outline btn-primary text-2xl font-semibold shadow-md border rounded-md'>View</button></li>
                            <li><button className='btn-sm btn-outline btn-secondary text-2xl font-semibold shadow-md border rounded-md'>Delete</button></li>
                            <li><button className='btn-sm btn-outline btn-info text-2xl font-semibold shadow-md border rounded-md'>Pending</button></li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ManageProduct;
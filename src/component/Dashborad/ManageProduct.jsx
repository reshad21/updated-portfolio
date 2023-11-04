import React from 'react';
import { useGetBlogQuery } from '../../redux/features/api/apiSlice';
import BlogTableRow from './BlogTableRow';

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
                {
                    data?.data.map((item, i) => <BlogTableRow item={item} key={item.id} sl={i} />)
                }

            </table>
        </div>
    );
};

export default ManageProduct;
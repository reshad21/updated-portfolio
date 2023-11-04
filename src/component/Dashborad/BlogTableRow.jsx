import React from 'react';
import { useDeleteBlogMutation } from '../../redux/features/api/apiSlice';

const BlogTableRow = ({ item, sl }) => {
    const [deleteBlog] = useDeleteBlogMutation();

    const handleDelete = (id) => {
        console.log(id);
        deleteBlog(id);
    }
    return (
        <>
            <tr key={item._id}>
                <td className='border-2'>{sl + 1}</td>
                <td className='border-2'>{item.date}</td>
                <td className='border-2'>{item.title}</td>
                <td className='border-2'>
                    <ul className='flex gap-4 p-4'>
                        <li><button className='btn-sm btn-outline btn-success text-2xl font-semibold shadow-md border rounded-md'>Edit</button></li>
                        <li><button className='btn-sm btn-outline btn-primary text-2xl font-semibold shadow-md border rounded-md'>View</button></li>
                        <li><button onClick={() => handleDelete(item._id)} className='btn-sm btn-outline btn-secondary text-2xl font-semibold shadow-md border rounded-md'>Delete</button></li>
                        <li><button className='btn-sm btn-outline btn-info text-2xl font-semibold shadow-md border rounded-md'>Pending</button></li>
                    </ul>
                </td>
            </tr>
        </>
    );
};

export default BlogTableRow;
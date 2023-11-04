import React from 'react';

const BlogTableRow = ({ item, sl }) => {
    return (
        <>
            <tr key={item.id}>
                <td className='border-2'>{sl + 1}</td>
                <td className='border-2'>{item.date}</td>
                <td className='border-2'>{item.title}</td>
                <td className='border-2'>
                    <ul className='flex gap-4 p-4'>
                        <li><button className='btn-sm btn-outline btn-success text-2xl font-semibold shadow-md border rounded-md'>Edit</button></li>
                        <li><button className='btn-sm btn-outline btn-primary text-2xl font-semibold shadow-md border rounded-md'>View</button></li>
                        <li><button className='btn-sm btn-outline btn-secondary text-2xl font-semibold shadow-md border rounded-md'>Delete</button></li>
                        <li><button className='btn-sm btn-outline btn-info text-2xl font-semibold shadow-md border rounded-md'>Pending</button></li>
                    </ul>
                </td>
            </tr>
        </>
    );
};

export default BlogTableRow;
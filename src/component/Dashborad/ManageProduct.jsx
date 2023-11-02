import React from 'react';
import { useGetBlogQuery } from '../../redux/features/api/apiSlice';

const ManageProduct = () => {
    const { data } = useGetBlogQuery();
    console.log(data.data);
    return (
        <div>
            Manage all product
        </div>
    );
};

export default ManageProduct;
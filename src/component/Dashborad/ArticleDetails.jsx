import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery } from '../../redux/features/api/apiSlice';

const ArticleDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBlogQuery(id);
    const { _id, title, description } = data?.data || {}
    console.log(title, description);
    return (
        <>
            <div className="card card-compact w-[70%] mx-auto bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-3xl">{title}</h2>
                    <p className='text-2xl'>{description}</p>
                </div>
            </div>
        </>
    );
};

export default ArticleDetails;
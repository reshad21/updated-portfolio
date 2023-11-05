import React, { useRef } from 'react';
import { useGetBlogQuery } from '../../redux/features/api/apiSlice';
import BlogTableRow from './BlogTableRow';
import ModalBox from './ModalBox';

const ManageProduct = () => {
    const { data } = useGetBlogQuery();
    const blogData = data?.data || [];

    const modalRef = useRef("");
    const openModal = (data) => {
        console.log("view product info:", data);
        modalRef.current.showModal();
    }
    const closeModal = () => {
        modalRef.current.close();
    }
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
                <tbody>
                    {
                        blogData.map((item, i) => <BlogTableRow item={item} key={item._id} sl={i} openModal={openModal} />)
                    }
                </tbody>
            </table>
            {/* <Dialogbox ref={modalRef} /> */}
            <ModalBox ref={modalRef} closeModal={closeModal} />
        </div>
    );
};

export default ManageProduct;
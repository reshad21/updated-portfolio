import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBlogQuery } from '../../redux/features/api/apiSlice';
import BlogTableRow from './BlogTableRow';
import ModalBox from './ModalBox';

const ManageProduct = () => {
    const { data } = useGetBlogQuery();
    const blogData = data?.data || [];
    const navigate = useNavigate();
    const modalRef = useRef(null);
    // const dispatch = useDispatch();

    const openModal = (data) => {
        modalRef.current.showModal();
        // dispatch(singleArticle(data._id));
    }

    const closeModal = () => {
        modalRef.current.close();
        navigate("/dashboard/manage-product");
    }

    return (
        <div className='w-full mt-20'>
            <table className='w-[80%] mx-auto text-2xl table border-2'>
                <thead>
                    <tr>
                        <th className='border-2 text-2xl'>SL.</th>
                        <th className='border-2 text-2xl'>Date</th>
                        <th className='border-2 text-2xl'>Title</th>
                        <th className='border-2 text-2xl'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogData.map((item, i) => <BlogTableRow item={item} key={item._id} sl={i} openModal={openModal} />)
                    }
                </tbody>
            </table>
            <ModalBox ref={modalRef} closeModal={closeModal} />
        </div>
    );
};

export default ManageProduct;

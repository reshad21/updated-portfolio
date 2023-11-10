import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useGetSingleBlogQuery } from '../../redux/features/api/apiSlice';

const ModalBox = ({ closeModal }, ref) => {

    const articleId = useSelector((state) => state.counter.singleBlogId);
    console.log(articleId);

    const { singleBlogInfo, isLoading, isSuccess, isError } = useGetSingleBlogQuery(articleId);
    console.log(singleBlogInfo);


    useEffect(() => {
        if (isLoading && isError) {
            return <p>Loading...</p>
        }
    }, [isLoading, isError])





    const dialogRef = useRef(null);

    // Define the showModal function
    const showModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    // Define the close function
    const close = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    // Expose the showModal and close functions to the parent component
    useImperativeHandle(ref, () => ({
        showModal,
        close,
    }));

    return (
        <div>
            <dialog ref={dialogRef} className='p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30%] h-fit'>
                <button autoFocus onClick={() => closeModal()} className='bg-slate-800 text-white px-2 rounded-md my-2'>Close</button>
                <form action="">
                    <input type="text" name='title' className='border border-slate-700 rounded-sm w-full h-10 px-2 mb-3' defaultValue={singleBlogInfo?.title || "this is title"} />
                    <textarea name="" id="" cols="30" rows="10" className='border border-slate-700 rounded-sm w-full px-2 mb-2'></textarea><br />
                    <button className='btn btn-primary text-3xl text-red-300'>Submit</button>
                </form>
            </dialog>
        </div>
    );
};

export default forwardRef(ModalBox);

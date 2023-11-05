import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ModalBox = ({ closeModal }, ref) => {
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
                    <input type="text" name='title' className='border border-slate-700 rounded-sm w-full h-10 px-2 mb-3' />
                    <input type="text" name='price' className='border border-slate-700 rounded-sm w-full h-10 px-2 mb-2' />
                    <input type='submit' className='bg-green-800 text-white px-2 rounded-md my-2' />
                </form>
            </dialog>
        </div>
    );
};

export default forwardRef(ModalBox);

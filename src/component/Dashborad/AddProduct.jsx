import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSaveBlogMutation } from '../../redux/features/api/apiSlice';

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const formRef = useRef(null);
    const navigate = useNavigate();

    const [postBlog, { isLoading }] = useSaveBlogMutation();

    const handleFormData = (e) => {
        e.preventDefault()
        const formData = { title, description }
        console.log(formData);
        postBlog({ ...formData, date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) });


        // Reset the form by clearing the state variables
        setTitle("");
        setDescription("");
        formRef.current.reset();
        navigate("/dashboard/manage-product");
    }
    return (
        <div className='w-full'>
            <h1 className='text-center my-6 text-4xl'>Product Details</h1>

            <form ref={formRef} className='bg-slate-50 w-[70%] mx-auto p-10 rounded-lg shadow-xl'>
                <div className="mb-3">
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input input-bordered w-full h-[50px] text-2xl" />
                </div>
                <div className="mb-3">
                    <textarea className="textarea textarea-bordered w-full h-[300px] text-2xl" placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="">
                    <button onClick={handleFormData} className='btn btn-outline btn-primary text-2xl'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
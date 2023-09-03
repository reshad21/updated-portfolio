import React, { useState } from 'react';
import { Link } from "react-router-dom";
import resume from "../../assets/reshad-resume.pdf";

const Navber = () => {
    const [toggle, setToggle] = useState(false);
    console.log(toggle);
    const navItem = (
        <>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#blog">Blog</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </>
    );

    const hide = "hidden";
    const show = "menu dropdown-content mt-3 p-5 shadow shadow-box w-62 text-left text-4xl font-bold z-50 bg-slate-500";
    return (
        <div className="shadow-md sticky top-0 z-50 bg-white bg-opacity-80">
            <div className="navbar max-w-screen-xl mx-auto z-10 p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setToggle(!toggle)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>


                        <ul tabIndex={0} className={`${toggle ? "menu dropdown-content mt-3 p-5 shadow-box w-[200px] text-left text-4xl font-bold z-5 rounded-xl shadow-xl text-slate-200 backdrop-blur-xl bg-gradient-to-r from-[#DD2476] to-[#FF512F]/30" : hide}`}>
                            {navItem}
                        </ul>

                    </div>

                    <Link className="text-5xl font-semibold">
                        <span className="banner-heading-sub">Reshad</span>.me
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal text-3xl ">{navItem}</ul>
                    </div>
                    <a href={resume} className="btn-sub" download="reshad-resume">
                        Download Cv
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navber;
import Lottie from "lottie-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerSvg from "../../assets/svg/bannerSvg.json";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30" id="home">
            <div className="banner-content p-24">
                <div className="md:flex justify-center items-center md:space-x-52 ">
                    <div className="p-10" data-aos="zoom-in-up">
                        <div>
                            <p className="text-5xl">Hello I&#39;m,</p>
                            <h2 className="banner-heading">Rashed Uzzaman Reshad</h2>
                            <h4 className="text-3xl md:text-5xl lg:text-5xl">
                                A{" "}
                                <span className="banner-heading-sub">Creative Developer </span>
                                From Bangladesh
                            </h4>
                            <div className="flex items-center space-x-5 mt-8">
                                <button className="btn-main">About Me</button>
                                <div className="flex items-center">
                                    <Link to="https://www.facebook.com/reshad.rashed.7">
                                        <FaFacebook className="text-6xl text-[#000] fa-icon" />
                                    </Link>
                                    <Link to="https://github.com/reshad21">
                                        <FaGithub className="text-6xl text-[#000] mx-5 fa-icon" />
                                    </Link>
                                    <Link to="https://www.linkedin.com/in/rashed-uzzaman-reshad/">
                                        <FaLinkedin className="text-6xl rounded-full text-[#000] fa-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-10" data-aos="zoom-in-up">
                        <div className="w-[200px] md:w-[400px] lg:w-[400px]">
                            <Lottie animationData={bannerSvg} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

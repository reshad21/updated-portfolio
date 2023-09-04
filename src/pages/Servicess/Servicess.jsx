import { FaCode, FaDesktop, FaMobileAlt, FaPenFancy } from "react-icons/fa";
import "./Servicess.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper/modules";
import { SwiperNavButtons } from "../../component/SwiperNavButton";

const Servicess = () => {
    return (
        <div className="services relative" id="services">
            <div>
                <img
                    className="absolute md:top-36 top-80 right-44"
                    data-aos="zoom-in-down"
                    src="https://i.ibb.co/D7B9JTn/bars12.png"
                    alt=""
                />
            </div>
            <div className="max-w-screen-xl mx-auto py-24" data-aos="zoom-in-up">
                <div className="text-center pb-24">
                    <h2 className="text-6xl banner-heading-sub">Services</h2>
                </div>
                <div className="">
                    <Swiper
                        slidesPerView={1}
                        navigation={false}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Navigation, FreeMode]}
                        spaceBetween={10}
                        className="mySwiper p-8 relative"
                    >

                        <SwiperSlide className="rounded-2xl shadow-2xl backdrop-blur-xl bg-white/30">
                            <div className="p-20 text-center services-content">
                                <FaDesktop className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">Marketing</h3>
                                <p className="text-slate-500 text-3xl">
                                    I have a team of digital marketer. They are top rated in many freelance platform. I can help you to grow your business. Also i can give you many business plan and tricks so that you can generate more traffic in your website.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl shadow-2xl backdrop-blur-xl bg-white/30">
                            <div className="p-20 text-center services-content">
                                <FaCode className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">DESIGN + DEVELOPMENT</h3>
                                <p className="text-slate-500 text-3xl">
                                    Unleash creativity with Design + Development! Elevate your digital presence with our expert fusion of design and technical prowess. Together, let's create something extraordinary and exciting!
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl shadow-2xl backdrop-blur-xl bg-white/30">
                            <div className="p-20 text-center services-content">
                                <FaPenFancy className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">CONTENT + MANAGEMENT</h3>
                                <p className="text-slate-500 text-3xl">
                                    Empower your brand with Content + Management! Captivate your audience with compelling storytelling while streamlining operations for seamless success. Let's unlock your brand's true potential together!
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl shadow-2xl backdrop-blur-xl bg-white/30">
                            <div className="p-20 text-center services-content">
                                <FaMobileAlt className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">MOBILE + FRIENDLY</h3>
                                <p className="text-slate-500 text-3xl">
                                    Mobilize your brand with user-friendly design! From smartphones to desktops, we create seamless experiences for every device. Embrace Mobile + Friendly solutions and conquer the digital landscape!
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperNavButtons />
                    </Swiper>
                </div>
            </div>
            <div className="hidden md:block lg:block">
                <img
                    className="absolute md:top-36 top-80 left-44"
                    data-aos="zoom-in-down"
                    src="https://i.ibb.co/D7B9JTn/bars12.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Servicess;

import { FaCode, FaDesktop, FaMobileAlt, FaPenFancy } from "react-icons/fa";
import "./Servicess.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Servicess = () => {
    return (
        <div className="services relative" id="services">
            <div>
                <img
                    className="absolute left-36 top-28"
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
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Navigation]}
                        spaceBetween={70}
                        className="mySwiper rounded-2xl"
                    >
                        <SwiperSlide className="rounded-2xl shadow-2xl">
                            <div className="p-20 text-center services-content">
                                <FaCode className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">DESIGN + DEVELOPMENT</h3>
                                <p className="text-slate-500 text-3xl">
                                    Unleash creativity with Design + Development! Elevate your digital presence with our expert fusion of design and technical prowess. Together, let's create something extraordinary and exciting!
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl shadow-2xl">
                            <div className="p-20 text-center services-content">
                                <FaPenFancy className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">CONTENT + MANAGEMENT</h3>
                                <p className="text-slate-500 text-3xl">
                                    Empower your brand with Content + Management! Captivate your audience with compelling storytelling while streamlining operations for seamless success. Let's unlock your brand's true potential together!
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl shadow-2xl">
                            <div className="p-20 text-center services-content">
                                <FaMobileAlt className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">MOBILE + FRIENDLY</h3>
                                <p className="text-slate-500 text-3xl">
                                    Mobilize your brand with user-friendly design! From smartphones to desktops, we create seamless experiences for every device. Embrace Mobile + Friendly solutions and conquer the digital landscape!
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl shadow-2xl">
                            <div className="p-20 text-center services-content">
                                <FaDesktop className="mx-auto text-9xl text-[#6815eb]" />
                                <h3 className="text-3xl mt-5 mb-10">ECOMMERCE</h3>
                                <p className="text-slate-500 text-3xl">
                                    Elevate your business with Ecommerce! From product display to secure transactions, we'll build your online success. Embrace the digital marketplace today and unlock boundless opportunities with our expert Ecommerce solutions!
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Servicess;

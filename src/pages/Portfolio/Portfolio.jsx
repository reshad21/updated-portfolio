import { FaGithub, FaLink } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="p-5 relative portfolio bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30" id="portfolio">
            <div>
                <img
                    className="absolute md:top-36 top-80 right-44"
                    data-aos="zoom-in-down"
                    src="https://i.ibb.co/D7B9JTn/bars12.png"
                    alt=""
                />
            </div>
            <div className="max-w-screen-xl mx-auto p-24">
                <div className="text-center pb-36 ">
                    <h2 className="text-6xl banner-heading-sub">Portfolio</h2>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                    <div className="portfolio-1">
                        <div className="mb-10 shadow-2xl rounded-2xl story__shape">
                            <img
                                className="h-full w-full rounded-2xl object-cover object-left-top"
                                data-aos="zoom-in-up"
                                src="https://i.ibb.co/mHwQ63B/Movie.png"
                                alt=""
                            />
                            <div className="story__caption rounded-2xl ">
                                <div className="text">
                                    <p className="text-4xl">Movie App</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/reshad21/movix" target="_blank">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://movixtime.netlify.app/" target="_blank">
                                            <FaLink
                                                title="Live Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shadow-2xl rounded-2xl story__shape">
                            <img
                                className="h-full w-full  rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://i.ibb.co/gjM0y24/React-App-1.png"
                                alt="blogging-image"
                            />

                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">CMS</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/reshad21/content-management-application" target="_blank">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://contentmanagement-application.vercel.app/" target="_blank">
                                            <FaLink
                                                title="Live Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-2">
                        <div className="shadow-2xl rounded-2xl mb-10 story__shape">
                            <img
                                className="h-full w-full object-cover object-left-top rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://i.ibb.co/smsL9XK/Wild-Photographer.png"
                                alt=""
                            />
                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Photography</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/reshad21/wild-photographer-client" target="_blank">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href=" https://winter-shopping-center.web.app/" target="_blank">
                                            <FaLink
                                                title="Live Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-2xl rounded-2xl story__shape">
                            <img
                                className="h-full w-full object-cover object-left-top rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://i.ibb.co/88WnbYW/Keofi-Great-coffee-good-vibes.png"
                                alt=""
                            />

                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Coffee</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/AkhiSharmin/Dark-Coffee-Website" target="_blank">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://akhisharmin.github.io/Dark-Coffee-Website/" target="_blank">
                                            <FaLink
                                                title="Live Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-3">
                        <div className="shadow-2xl rounded-2xl mb-10 story__shape">
                            <img
                                className="h-full w-full object-cover object-left-top rounded-2xl "
                                data-aos="zoom-in-up"
                                src="https://i.ibb.co/m85BXsN/Rap2-France-Home.png"
                                alt=""
                            />
                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Musical Website</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/AkhiSharmin/Rap2France" target="_blank">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://akhisharmin.github.io/Rap2France/?#" target="_blank">
                                            <FaLink
                                                title="Live Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-2xl rounded-2xl story__shape">
                            <img
                                className="h-full w-full object-cover object-left-top rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://i.ibb.co/w4Chv8Z/Legal-solution-resources.png"
                                alt=""
                            />

                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Legal Solution</p>
                                    <div className="flex items-center mt-10">
                                        <a href="#" target="_blank">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://clinquant-horse-92e374.netlify.app/" target="_blank">
                                            <FaLink
                                                title="Live Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

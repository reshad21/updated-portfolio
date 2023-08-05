import { FaGithub, FaLink } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="p-5 relative portfolio" id="portfolio">
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
                        <div className="mb-10 shadow-2xl rounded-2xl rounded-2xl story__shape">
                            <img
                                className="h-full w-full story__img rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                alt=""
                            />
                            <div className="story__caption rounded-2xl ">
                                <div className="text">
                                    <p className="text-4xl">Movie App</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/reshad21/movix">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://movixtime.netlify.app/">
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
                                className="h-full w-full story__img rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://images.unsplash.com/photo-1518976224508-8119c10fabad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
                                alt=""
                            />

                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">CMS</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/reshad21/content-management-application">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://frontendarticls.netlify.app/">
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
                                className="h-full w-full story__img rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://images.unsplash.com/photo-1531347387918-af516d1e939c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                                alt=""
                            />
                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Photography</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/reshad21/wild-photographer-client">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#2fffd5] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href=" https://winter-shopping-center.web.app/">
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
                                className="h-full w-full story__img rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                alt=""
                            />

                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Coffee</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/AkhiSharmin/Dark-Coffee-Website">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://akhisharmin.github.io/Dark-Coffee-Website/">
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
                                className="h-full w-full story__img rounded-2xl "
                                data-aos="zoom-in-up"
                                src="https://images.unsplash.com/photo-1518665750801-883c188a660d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                alt=""
                            />
                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Musical Website</p>
                                    <div className="flex items-center mt-10">
                                        <a href="https://github.com/AkhiSharmin/Rap2France">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://akhisharmin.github.io/Rap2France/?#">
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
                                className="h-full w-full story__img rounded-2xl"
                                data-aos="zoom-in-up"
                                src="https://images.unsplash.com/photo-1512279093314-5926a353720c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                                alt=""
                            />

                            <div className="story__caption rounded-2xl">
                                <div className="text">
                                    <p className="text-4xl">Legal Solution</p>
                                    <div className="flex items-center mt-10">
                                        <a href="#">
                                            <FaGithub
                                                title="Code Link"
                                                className="text-6xl text-[#ef00b7] mx-5 fa-icon"
                                            />
                                        </a>
                                        <a href="https://clinquant-horse-92e374.netlify.app/">
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

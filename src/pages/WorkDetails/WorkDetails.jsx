import "./WorkDetails.css";

const WorkDetails = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-36 md:p-48 lg:p-48" data-aos="zoom-in-up">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -mt-16 gap-20 md:gap-14 lg:gap-9">
                <div className="bg-white p-5 shadow-xl shadow-box rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="md:flex items-center space-x-2 justify-center">
                        <img
                            className="inline"
                            src="https://i.ibb.co/mRVqGQf/1.png"
                            alt=""
                        />
                        <div>
                            <h3 className="text-4xl mb-3">Pixel Perfect</h3>
                            <p className="text-2xl text-slate-500">
                                Pixel Perfect expert with a keen eye for detail, delivering flawless designs and exceptional user experiences. Elevate your projects with my precision and dedication.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 shadow-xl shadow-box rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="md:flex items-center space-x-2 work-details">
                        <img
                            className="inline"
                            src="https://i.ibb.co/84w10wQ/2.png"
                            alt=""
                        />
                        <div>
                            <h3 className="text-4xl mb-3">high Quality</h3>
                            <p className="text-2xl text-slate-500">
                                Experienced frontend web developer and skilled React specialist, crafting captivating user interfaces and delivering top-notch digital solutions. Let my expertise elevate your projects and create remarkable user experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 shadow-xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="md:flex items-center space-x-2">
                        <img
                            className="inline"
                            src="https://i.ibb.co/vZbYX1w/3.png"
                            alt=""
                        />
                        <div>
                            <h3 className="text-4xl mb-3">Awesome Idea</h3>
                            <p className="text-2xl text-slate-500">
                                Introducing a groundbreaking web app that seamlessly simplifies your life. With its intuitive interface and powerful features, it's the ultimate solution you've been waiting for. Embrace the future of productivity and experience a whole new level of convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;

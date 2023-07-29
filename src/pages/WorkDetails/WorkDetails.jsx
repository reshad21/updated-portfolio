import "./WorkDetails.css";

const WorkDetails = () => {
    return (
        <div className="max-w-screen-xl mx-auto sm:p-5 p-48" data-aos="zoom-in-up">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -mt-16 gap-36">
                <div className="bg-white p-5 shadow-xl shadow-box rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="md:flex items-center space-x-10 justify-center">
                        <img
                            className="inline"
                            src="https://i.ibb.co/mRVqGQf/1.png"
                            alt=""
                        />
                        <div>
                            <h3 className="text-4xl mb-3">Pixel Perfect</h3>
                            <p className="text-3xl text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Soluta, tempora asperiores facilis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 shadow-xl shadow-box rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="md:flex items-center space-x-10 work-details">
                        <img
                            className="inline"
                            src="https://i.ibb.co/84w10wQ/2.png"
                            alt=""
                        />
                        <div>
                            <h3 className="text-4xl mb-3">high Quality</h3>
                            <p className="text-3xl text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Soluta, tempora asperiores.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 shadow-xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="md:flex items-center space-x-10">
                        <img
                            className="inline"
                            src="https://i.ibb.co/vZbYX1w/3.png"
                            alt=""
                        />
                        <div>
                            <h3 className="text-4xl mb-3">Awesome Idea</h3>
                            <p className="text-3xl text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Soluta, tempora asperiores facilis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;

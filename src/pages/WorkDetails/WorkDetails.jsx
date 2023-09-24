import { FcIdea } from 'react-icons/fc';
import { LuPaintbrush2 } from 'react-icons/lu';
import { TbTargetArrow } from 'react-icons/tb';

import "./WorkDetails.css";
const WorkDetails = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-36 md:p-48 lg:p-48" data-aos="zoom-in-up">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -mt-16 gap-20 md:gap-14 lg:gap-9">

                <div className="p-5 nm-flat-red-500 work_details rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="flex items-center space-x-2 flex-col gap-6 pb-4">
                        <span><TbTargetArrow size={60} color='#F4E869' /></span>
                        <div className="text-center">
                            <h3 className="text-4xl mb-3">Pixel Perfect</h3>
                            <p className="text-2xl text-slate-800">
                                Pixel Perfect expert with a keen eye for detail, delivering flawless designs and exceptional user experiences. Elevate your projects with my precision and dedication.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 work_details rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="flex items-center space-x-2 flex-col gap-6 pb-4">
                        <span><FcIdea size={60} /></span>
                        <div className="text-center">
                            <h3 className="text-4xl mb-3">Awesome Idea</h3>
                            <p className="text-2xl text-slate-800">
                                Introducing a groundbreaking web app that seamlessly simplifies your life. With its intuitive interface and powerful features, it's the ultimate solution you've been waiting for. Embrace the future of productivity and experience a whole new level of convenience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 work_details rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="flex items-center space-x-2 flex-col gap-6 pb-4">
                        <span><LuPaintbrush2 size={60} color='#F4E869' /></span>
                        <div className="text-center">
                            <h3 className="text-4xl mb-3">high Quality</h3>
                            <p className="text-2xl text-slate-800">
                                Experienced frontend web developer and skilled React specialist, crafting captivating user interfaces and delivering top-notch digital solutions. Let my expertise elevate your projects and create remarkable user experiences.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WorkDetails;

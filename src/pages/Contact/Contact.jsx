import Lottie from "lottie-react";
import contactSvg from "../../assets/svg/Customer Service.json";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { toast } from "react-hot-toast";
import "./Contact.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m5g58fb', 'template_pjuuara', form.current, 'H1FDX9WkK7hJQntOL')
            .then((response) => {
                console.log('SUCCESS!', response.status);
                toast.success('Your Message Successfully Send..!');
                e.target.reset();
            }, (err) => {
                console.log('FAILED...', err);
            });

    }

    return (
        <div className="contact" data-aos="zoom-in-up">
            <div className="max-w-screen-xl mx-auto " id="contact">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="p-24">
                        <div className="flex items-center">
                            <div>
                                <Lottie animationData={contactSvg} loop={true} />
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="card-body p-24">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        name="from_name"
                                        className="input input-bordered text-3xl p-10 rounded-2xl border-4"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Your Email"
                                        name="from_email"
                                        className="input input-bordered text-3xl p-10 rounded-2xl border-4"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Your Phone"
                                        name="from_phone"
                                        className="input input-bordered text-3xl p-10 rounded-2xl border-4"
                                    />
                                </div>
                                <div className="form-control ">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="from_subject"
                                        className="input input-bordered text-3xl p-10 rounded-2xl border-4 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <textarea
                                name="message"
                                className="border-4 rounded-2xl mt-5 p-10 focus:outline-none text-3xl"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Please Write Your Message"
                            ></textarea>
                            <div className="form-control mt-6 w-[28%]">
                                <input type="submit" value="Submit Now" className="btn-main" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

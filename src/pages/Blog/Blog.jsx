import "./Blog.css";

const Blog = () => {
    return (
        <div className="blog bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 relative" id="blog">
            <div>
                <img
                    className="absolute right-36 top-20"
                    data-aos="zoom-in-down"
                    src="https://i.ibb.co/D7B9JTn/bars12.png"
                    alt=""
                />
            </div>
            <div
                className="max-w-screen-xl mx-auto md:px-0 px-48"
                data-aos="zoom-in-up"
            >
                <div className="text-center p-24">
                    <h2 className="text-6xl banner-heading-sub">Blog</h2>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-36 pb-36">
                    <div className="card bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1521927336940-cae6e9f22945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body ">
                            <h3 className="text-4xl banner-heading-sub mb-3">
                                Web Development
                            </h3>
                            <p className="text-3xl text-slate-500">
                                If a dog chews shoes whose shoes does he choose? Lorem ipsum,
                                dolor sit amet consectetur adipisicing elit. Inventore dolorem,
                                assumenda.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1513045053232-9d9080b8924f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body ">
                            <h3 className="text-4xl banner-heading-sub mb-3">Branding</h3>
                            <p className="text-3xl text-slate-500">
                                If a dog chews shoes whose shoes does he choose? Lorem ipsum,
                                dolor sit amet consectetur adipisicing elit. Inventore dolorem,
                                assumenda.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body ">
                            <h3 className="text-4xl banner-heading-sub mb-3">Social Media</h3>
                            <p className="text-3xl text-slate-500">
                                If a dog chews shoes whose shoes does he choose? Lorem ipsum,
                                dolor sit amet consectetur adipisicing elit. Inventore dolorem,
                                assumenda.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center pb-24">
                    <button className="btn-sub">Learn More...</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;

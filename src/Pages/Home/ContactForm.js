import React from 'react';
import bgImg from '../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <div style={{
            background: `url(${bgImg})`
        }} className="hero min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder="Subject" className="input input-bordered" />

                        </div>

                        <div className="form-control">

                            <input type="text" placeholder="Your Message" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
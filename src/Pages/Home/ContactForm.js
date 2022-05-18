import React from 'react';
import bgImg from '../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <div style={{
            background: `url(${bgImg})`
        }} class="hero min-h-screen">

            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">

                            <input type="text" placeholder="Subject" class="input input-bordered" />

                        </div>

                        <div class="form-control">

                            <input type="text" placeholder="Your Message" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
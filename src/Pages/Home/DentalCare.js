import React from 'react';
import care from '../../assets/images/treatment.png'
import Primarybutton from '../Shared/Primarybutton';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={care} className="w-80 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Primarybutton>Get Started</Primarybutton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
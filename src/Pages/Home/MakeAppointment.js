import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bgImg from '../../assets/images/appointment.png'
import Primarybutton from '../Shared/Primarybutton';

const MakeAppointment = () => {
    return (
        <section className='flex items-center justify-center my-12'
            style={{
                background: `url(${bgImg})`
            }}>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-xl text-primary font-bold'>Appointment</h1>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit hic necessitatibus? Eveniet, magni laboriosam? Fuga, corrupti soluta odit assumenda sit obcaecati magnam, accusantium, tenetur harum fugit nesciunt aliquid eius.</p>
                <Primarybutton>Get Started</Primarybutton>
            </div>
        </section>
    );
};

export default MakeAppointment;
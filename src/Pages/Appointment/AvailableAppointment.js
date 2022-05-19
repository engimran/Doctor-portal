import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';


const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-primary text-xl font-bold text-center'>Available Appointment Date:{format(date, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    services.map(service => <Booking
                        key={service._id}
                        booking={service}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;
import React from 'react';

const Booking = ({ booking }) => {
    const { name, slots } = booking;
    return (
        <div class="card shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary uppercase">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span> : <span className='text-red-500 font-bold'>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary">Booking Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Booking;
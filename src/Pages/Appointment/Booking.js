import React from 'react';

const Booking = ({ booking, setTreatment }) => {
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
                    <label for="my-modal" class="btn modal-button btn-secondary" disabled={slots.length === 0} onClick={() => setTreatment(booking)}>Booking Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Booking;
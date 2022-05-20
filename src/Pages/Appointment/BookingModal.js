import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(name, _id, slot)
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-secondary text-lg uppercase text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />

                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' class="btn btn-secondary w-full max-w-xs" />
                    </form>

                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                </div>
            </div>

        </div>
    );
};

export default BookingModal;
import React from 'react';
import quote from '../../assets/icons/quote.svg'
import hery from '../../assets/images/people1.png'
import kery from '../../assets/images/people2.png'
import chery from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Hery',
            review: 'Best service',
            img: hery
        },
        {
            _id: 2,
            name: 'Kery',
            review: 'Wow',
            img: kery
        },
        {
            _id: 3,
            name: 'Chery',
            review: 'Good',
            img: chery
        },
    ]
    return (
        <section className='my-20'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-3xl text-primary font-bold'>Testimonials</h1>
                        <h2 className='text-xl'>What our patient say</h2>
                    </div>
                    <div>
                        <img className='lg:w-48 w-24' src={quote} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >

                        </Review>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Testimonials;
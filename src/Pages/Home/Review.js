import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, sunt.</p>
                <div className='flex items-center' >
                    <div>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold'>{review.name}</h3>
                        <h3>{review.review}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
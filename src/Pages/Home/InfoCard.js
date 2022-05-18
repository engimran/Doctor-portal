import React from 'react';

const InfoCard = ({ img, cardTitle }) => {
    return (
        <div class="card card-side shadow-xl bg-accent pl-1">
            <figure><img src={img} alt="" /></figure>

            <div class="card-body">
                <h2 class="card-title text-white">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>

            </div>
        </div>
    );
};

export default InfoCard;
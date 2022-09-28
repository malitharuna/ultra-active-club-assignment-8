import React from 'react';
import './Activity.css'

const Activity = ({activity}) => {
    const {img, time, name} = activity;
    return (
        <div className='single-activity'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Time required : {time}</p>
            <button></button>
        </div>
    );
};

export default Activity;
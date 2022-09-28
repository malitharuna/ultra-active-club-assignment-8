import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {activity, handleToDetail} = props;
    const {img, time, name} = activity;
    return (
        <div className='single-activity'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Time required : {time}</p>
            <button onClick={()=>handleToDetail(activity)} >Add To details</button>
        </div>
    );
};

export default Activity;
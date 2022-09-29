import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {activity, handleToDetail} = props;
    const {img, time, name} = activity;
    return (
        <div className='single-activity'>
            <div>
                <img src={img} alt="" />
                <div className='sa-head'>
                <h3>{name}</h3>
                <p>Time required : {time}</p>
                </div>
            </div>
            <button onClick={()=>handleToDetail(activity)} >Add To details</button>
        </div>
    );
};

export default Activity;
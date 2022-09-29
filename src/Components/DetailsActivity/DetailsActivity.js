import React, { useState } from 'react';
import './DetailsActivity.css'

const DetailsActivity = ({activity}) => {
    const [breakTime, setBreakTime] = useState('');

    // console.log(props)
    localStorage.setItem('activity', JSON.stringify(activity));


    // const {singleActivity} = props.activity'?\
    // let time = 0;
    // for( let time of activity ){
        
    // }

    const handleBreakTime = breakTime => setBreakTime(breakTime);
    
    return (
        <div>
            <h3>Add a Break</h3>
            <div>
                <button onClick={()=> handleBreakTime('20min')} >20min</button>
                <button onClick={()=> handleBreakTime('25min')}>25min</button>
                <button onClick={()=> handleBreakTime('15min')}>15min</button>
                <button onClick={()=> handleBreakTime('10min')}>10min</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <p>Exercise Time:  </p>
                <p>Break Time: {breakTime} </p>
            </div>
            <button>Activity Completed</button>
            
        </div>
    );
};

export default DetailsActivity;
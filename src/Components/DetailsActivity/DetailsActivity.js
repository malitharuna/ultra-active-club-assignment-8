import React, { useEffect, useState } from 'react';
import './DetailsActivity.css';


const DetailsActivity = (props) => {
    const {cart} = props;
    // console.log(cart);
    const [breakTime, setBreakTime] = useState("");

    useEffect(()=>{
      const storedCart = handleBreakTime(breakTime); 
      console.log(storedCart);
  
    },[breakTime]);

    const handleBreakTime = breakTime => {
        setBreakTime(breakTime);
        localStorage.setItem('break-time', breakTime );
        const storedCart = localStorage.getItem('break-time');
        return storedCart;
    };

    let totalTime = 0;
    for(const activity of cart){
        totalTime = totalTime + activity.time;
    };

    return (
        <div className='cart-detail'>
            <h3>Add a Break</h3>
            <div className='btn-break'>
                <button onClick={()=> handleBreakTime('20min')} >20min</button>
                <button onClick={()=> handleBreakTime('25min')}>25min</button>
                <button onClick={()=> handleBreakTime('15min')}>15min</button>
                <button onClick={()=> handleBreakTime('10min')}>10min</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <p>Cart Item: {cart.length}</p>
                <p>Exercise Time: {totalTime} hours</p>
                <p>Break Time: {breakTime} </p>
            </div>
            <button>Activity Completed</button> 
        </div>
    );
};

export default DetailsActivity;

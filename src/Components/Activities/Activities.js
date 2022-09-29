import React, { useEffect, useState } from 'react';
import './Activities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook} from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity/Activity';
import DetailsActivity from '../DetailsActivity/DetailsActivity';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch(`activities.json`)
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])

    const handleToDetail = (activity) =>{
        //  console.log(activity);
        const newCart = [...cart, activity]
        setCart(newCart);    
    }
    return (
        <div className='main'>
            <div >
                <div className='header'>
                    <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                    <h1 className='title'>My-Daily-Activities</h1>
                </div>
                <div><h3>Select Today's Work</h3></div>
                <div className='activity'>
                
                {
                    activities.map(activity => <Activity
                    key={activity.id}
                    activity={activity}
                    handleToDetail={handleToDetail}   
                    ></Activity>)
                }
                </div>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg818gFernAq_PQHzux1LO09RSu_IOMzkclfzp8yfAg3ZHKxW-6PdG8J9p2hnj_Ebs9Y&usqp=CAU" alt="" />
                <p>My Name: Malitha Runa</p>
                <p>Profession: Web-Developer</p>
                <div>
                    <span>
                        Weight:55kg
                    </span>
                    <span>
                        Height: 5.5
                    </span>
                    <span>
                        Age: 25 years
                    </span>
                </div>
                <DetailsActivity cart={cart} > </DetailsActivity>
            </div>
        </div>
    );
};

export default Activities;
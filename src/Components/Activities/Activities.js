import React, { useEffect, useState } from 'react';
import './Activities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook} from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        fetch(`activities.json`)
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])

    const handleToDetail=(activity)=>{
        console.log('click')
    }
    return (
        <div className='main'>
            <div >
                <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                <h1>My-Daily-Activities</h1>
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
                this is Detail of Activities
            </div>
        </div>
    );
};

export default Activities;
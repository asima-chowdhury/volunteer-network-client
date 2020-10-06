import React, { useEffect, useState } from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';

const Activities = () => {

    const [volunteerActivities, setVolunteerActivities] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setVolunteerActivities(data))
    }, [])

    // const handleAddActivity = () => {
    //     fetch('http://localhost:5000/addActivities', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(fakeData)
    //     })
    // }

    const [activityTask, setActivityTask] = useState([]);

    const handleRegActivity = (id) => {
        // console.log('clicked', activityTask);
        setActivityTask(volunteerActivities);
    }
    return (
        <div className="row my-5">
            {
                volunteerActivities.map(activity => <SingleActivity
                    activity={activity}
                    key={activity.id}
                    handleRegActivity={handleRegActivity}
                ></SingleActivity>)
            }
            {/* <button onClick={handleAddActivity}>add activity</button> */}
        </div>
    );
};

export default Activities;
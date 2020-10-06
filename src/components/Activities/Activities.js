import React, { useEffect, useState } from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';

const Activities = () => {

    const [volunteerActivities, setVolunteerActivities] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-hollows-72216.herokuapp.com/activities')
            .then(res => res.json())
            .then(data => setVolunteerActivities(data))
    }, [])

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
        </div>
    );
};

export default Activities;
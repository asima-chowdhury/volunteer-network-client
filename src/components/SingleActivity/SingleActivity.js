import React from 'react';
import { Link } from 'react-router-dom';
import './SingleActivity.css';

const SingleActivity = (props) => {
    const { id, activityName, img, bgColor } = props.activity;
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 single-activity my-3">
            <Link to={`/registrationPage/${id}`} onClick={() => { props.handleRegActivity(props.id) }}>
                <img src={img} alt="" className="img-fluid max-width: 50% height: 50%" />
                <h5 className="activity-name text-white text-center" style={{ backgroundColor: `${bgColor}` }} >{activityName}</h5>
            </Link>
        </div>
    );
};

export default SingleActivity;
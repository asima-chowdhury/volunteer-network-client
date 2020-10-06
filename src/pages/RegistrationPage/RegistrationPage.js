import React, { useContext, useEffect, useState } from 'react';
import './RegistrationPage.css'
import logo from '../../images/logos/logo.png';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const RegistrationPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [singleActivity, setSingleActivity] = useState([]);

    const { activityId } = useParams();
    const { register,handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) =>{
        // console.log(data);
        fetch('http://localhost:5000/addEvent',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            history.push("/eventsPage");
            console.log(data);
            console.log('posted');
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => {
                const singleActivity = data.map(activity => activity);
                const activityInfo = singleActivity.find(data => parseInt(data.id) == parseInt(activityId));
                setSingleActivity(activityInfo);
            })
    }, [])
    return (
        <div className="custom-container">
            <div className="container">
                <div className="div">
                    <Link to="/home">
                        <Button variant="primary">Go Home</Button>
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-3" />
                    </Link>
                </div>
                <div className="custom-form col-md-6 offset-md-3">
                    <h5 className="font-weight-bold">Register as a Volunteer</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="fullName" defaultValue={loggedInUser.displayName} placeholder="Full Name" ref={register({ required: true })} />
                        {errors.fullName && <span className="error">Full Name is required</span>}

                        <input name="email" defaultValue={loggedInUser.email} placeholder="Username or Email" ref={register({ required: true })} />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="date" type="date" ref={register({ required: true })} />
                        {errors.date && <span className="error">Date is required</span>}

                        <input name="description" placeholder="Description" ref={register({ required: true })} />
                        {errors.description && <span className="error">Description is required</span>}

                        <input name="activityName" defaultValue={singleActivity.activityName} placeholder="Activity Name" ref={register({ required: true })} />
                        {errors.activityName && <span className="error">Activity Name is required</span>}

                        <input type="submit" variant="primary" value="Registration" className="my-3 btn-block" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
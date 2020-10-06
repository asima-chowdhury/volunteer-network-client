import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Button } from 'react-bootstrap';
import eventImg from '../../images/homeImages/extraVolunteer.png'
import './EventPage.css';
import Header from '../../components/Header/Header';

const EventsPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-hollows-72216.herokuapp.com/event?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const deleteEvent = (id) => {
        // console.log('clicked', id)
        fetch(`https://fathomless-hollows-72216.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const updateItems = events.filter(item => item._id !== id);
                    setEvents(updateItems);
                }
            })
    }

    return (
        <div className="eventPage">
            <Header></Header>
            <Container className="py-5">
                <div className="text-center">
                    <h3>Welcome to Volunteer Network!!</h3>
                    <h4>You have <span className="text-primary font-weight-bold">{events.length}</span> events!!</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row my-5">
                        {
                            events.map(event =>
                                <div className="col-xl-6 col-lg-6 col-md-6 single-events my-3" key={event._id}>
                                    <div className="events-info row">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={eventImg} alt="" className="img-fluid max-width: 50% height: 50%" />
                                            </div>
                                            <div className="col-md-6" >
                                                <h5>{event.activityName}</h5>
                                                <h6><b>Date:</b> {new Date(event.date).toDateString('dd/MM/yyyy')}</h6>
                                                <p><b>Description:</b> {event.description}</p>
                                                <Button onClick={() => deleteEvent(event._id)} variant="light">Cancel</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EventsPage;
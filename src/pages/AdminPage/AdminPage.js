import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminPage.css'
import logo from '../../images/logos/logo.png';

const AdminPage = () => {
    const [adminVolunteerList, setAdminVolunteerList] = useState([]);
    const [active, setActive] = useState(true);

    useEffect(() => {
        fetch('https://fathomless-hollows-72216.herokuapp.com/volunteerList')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdminVolunteerList(data);
            })
    }, [])

    const deleteEvent = (id) => {
        fetch(`https://fathomless-hollows-72216.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const updateList = adminVolunteerList.filter(item => item._id !== id);
                    setAdminVolunteerList(updateList);
                }
            })
    }
    return (
        <Container>
            <div className="row side-nav">
                <div className="col-md-3 d-flex flex-column">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-3" />
                    </Link>
                    <Link to="#" onClick={() => setActive(!active)} className="admin-navLink my-2 font-weight-bold">
                        <img src="https://i.imgur.com/9AOzR42.png" alt="volunteer" />
                        Volunteer register list
                    </Link>
                    <Link to="#" onClick={() => setActive(!active)} className="admin-navLink my-2 font-weight-bold">
                        <img src="https://i.imgur.com/NMYvbXy.png" alt="addEvent" />
                        Add event
                    </Link>
                </div>
                {
                    active ?
                        <div className="col-md-9">
                            <h5 className="my-4 ml-2 font-weight-bold text-left">Volunteer register list</h5>
                            <div className="row">
                                <Table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Registration date</th>
                                            <th>Volunteer list</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            adminVolunteerList.map(
                                                singleList =>
                                                    <tr key={singleList._id}>
                                                        <td>{singleList.fullName}</td>
                                                        <td>{singleList.email}</td>
                                                        <td>{new Date(singleList.date).toDateString('dd/MM/yyyy')}</td>
                                                        <td>{singleList.activityName}</td>
                                                        <td>
                                                            <button onClick={() => deleteEvent(singleList._id)} className="delete-icon rounded">
                                                                <img className="trash-icon" src="https://i.imgur.com/gxmzamg.png" alt="delete" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        :
                        <div className="col-md-9">
                            <h5 className="my-4 ml-2 font-weight-bold text-left">Add Event</h5>
                            <div className="row">
                                <form>
                                    <div className="d-flex justify-content-between">
                                        <div className="mr-2">
                                            <label>Event Title</label>
                                            <input name="title" type="text"/>
                                        </div>
                                        <div>
                                            <label>Event date</label>
                                            <input name="to" type="date"/>
                                        </div>
                                    </div>
                                    <input type="submit" variant="warning" value="Submit" className="my-3 btn-block font-weight-bold" />
                                </form>
                            </div>
                        </div>
                }
            </div>
        </Container>
    );
};

export default AdminPage;
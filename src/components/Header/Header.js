import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container className="header">
            <Navbar bg="***" variant="light" className="py-4">
                <Link to="/home">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <Nav className="ml-auto customNav">
                    {/* <Nav.Link href="#">Home</Nav.Link> */}
                    <Link to="/home" className="custom-link">Home</Link>
                    <Nav.Link href="#">Donation</Nav.Link>
                    <Link to="/eventsPage" className="custom-link">Events</Link>
                    <Nav.Link href="#">{loggedInUser.displayName}</Nav.Link>
                    <Link to="#" >
                        <Button variant="primary" className="customButton">Register</Button>
                    </Link>
                    {
                        loggedInUser.email ? 
                        <Button variant="primary" className="customButton" onClick={() => setLoggedInUser({})}>Logout</Button>
                         :
                        <Link to="/login">
                            <Button variant="primary" className="customButton">Login</Button>
                        </Link>
                    }
                    <Link to="/adminPage">
                        <Button variant="dark" className="customButton" >Admin</Button>
                    </Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;
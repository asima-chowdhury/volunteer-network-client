import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import './Home.css';
import homeBackground from '../../images/homeImages/home-bg.png';
import Activities from '../../components/Activities/Activities';

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) ), url(${homeBackground})` }}>
            <Header></Header>
            <Container className="py-5">
                <h2 className="my-5 text-center">I GROW BY HELPING PEOPLE IN NEED.</h2>
                <div className="d-flex justify-content-center">
                    <Form inline>
                        <FormControl type="text" placeholder="Search...." />
                        <Button variant="primary">Search</Button>
                    </Form>
                </div>
                <Activities></Activities>
            </Container>
        </div>
    );
};

export default Home;
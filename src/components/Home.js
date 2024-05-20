import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import AuthenticationService from '../services/AuthenticationService';
class Home extends Component {

    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/books/">Books</Link></Button>
                    <p>This is Home page. Hi!</p>
                </Container>
                
            </div>
            
        );
    }
}

export default Home;
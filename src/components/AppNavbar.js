import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavbarText} from 'reactstrap';
import {Link} from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand tag={Link} to="/login" >Login</NavbarBrand>
            
            
        </Navbar>;
    }
}
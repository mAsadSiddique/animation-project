import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';

function NavBar() {
    return ( <
        >
        <
        div className = "container-fluid nav_bg" >
        <
        div className = "row" >
        <
        div className = "col-10 mx-auto" >
        <
        Navbar bg = "light"
        variant = "light" >
        <
        Navbar.Brand className = "navbar-brand"
        href = "#" > Khan Motors < /Navbar.Brand> <
        Nav className = "ml-auto" >
        <
        Nav.Link href = "#home" > Home < /Nav.Link> <
        Nav.Link href = "#features" > Services < /Nav.Link> <
        Nav.Link href = "#pricing" > About < /Nav.Link> <
        /Nav> <
        /Navbar> <
        /div> <
        /div> <
        /div> <
        />
    );
}


export default NavBar;
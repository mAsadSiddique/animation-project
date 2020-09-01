import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
        href = "/Home" > Khan Motors < /Navbar.Brand> <
        Nav className = "ml-auto" >
        <
        Nav.Link href = "/Home" > Home < /Nav.Link> <
        Nav.Link href = "/Services" > Services < /Nav.Link> <
        Nav.Link href = "/About" > About < /Nav.Link> <
        /Nav> <
        /Navbar> <
        /div> <
        /div> <
        /div> <
        />
    );
}


export default NavBar;
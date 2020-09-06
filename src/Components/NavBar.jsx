import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
        Navbar className = "navbar navbar-expand-lg navbar-light bg-light"
        bg = "light"
        expand = "lg" >
        <
        NavLink className = "navbar-brand"
        to = "/home" > Khan Motors < /NavLink> <
        Navbar.Toggle ariacontrols = "basic-navbar-nav" / >
        <
        Navbar.Collapse id = "basic-navbar-nav" > { /* <Nav className="navbar-nav ml-auto mb-2 mb-lg-0"> */ } <
        ul className = "navbar-nav ml-auto mb-2 mb-lg-0" >
        <
        li className = "nav-item" >
        <
        NavLink exact = "true"
        activeClassName = "menu-active"
        className = "nav-link "
        to = "/Home" >
        Home <
        /NavLink> <
        /li>

        <
        li className = "nav-item" >
        <
        NavLink activeClassName = "menu-active"
        className = "nav-link "
        to = "/Services" >
        Services <
        /NavLink> <
        /li>

        <
        li className = "nav-item" >
        <
        NavLink activeClassName = "menu-active"
        className = "nav-link "
        to = "/About" >
        About <
        /NavLink> <
        /li> <
        li className = "nav-item" >
        <
        NavLink activeClassName = "menu-active"
        className = "nav-link "
        to = "/Contact" >
        Contact <
        /NavLink> <
        /li>

        <
        /ul> { /* </Nav> */ } <
        /Navbar.Collapse> <
        /Navbar> <
        /div> <
        /div> <
        /div> <
        />
    );
}


export default NavBar;




{
    /* <Navbar bg="light" variant="light">
                                <Navbar.Brand className="navbar-brand" href="/Home">Khan Motors</Navbar.Brand>
                                <Nav className="ml-auto" >
                                    <li><Nav.Link
                                        href="/Home"
                                        activateClassName="active-link"
                                    >Home
                                   </Nav.Link>
                                    </li>
                                    <li><Nav.Link
                                        href="/Services"
                                        activateClassName="active-link"
                                    >Services
                                   </Nav.Link>
                                    </li>
                                    <li><Nav.Link
                                        href="/About"
                                        activateClassName="active-link"
                                    >About
                                    </Nav.Link>
                                    </li>
                                </Nav>
                            </Navbar> */
}
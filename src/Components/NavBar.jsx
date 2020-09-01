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
        expand = "lg" >
        <
        Navbar.Brand href = "/home" > Khan Motors < /Navbar.Brand> <
        Navbar.Toggle ariacontrols = "basic-navbar-nav" / >
        <
        Navbar.Collapse id = "basic-navbar-nav" >
        <
        Nav className = "ml-auto" >
        <
        Nav.Link href = "/Home"
        // activateClassName="active-link"
        >
        Home <
        /Nav.Link> <
        Nav.Link href = "/Services"
        // activateClassName="active-link"
        >
        Services <
        /Nav.Link> <
        Nav.Link href = "/About"
        // activateClassName="active-link"
        >
        About <
        /Nav.Link> <
        /Nav> <
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
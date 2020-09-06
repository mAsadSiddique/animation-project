import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <div>
            <div className="container-fluid nav_bg" >
                <div className="row" >
                    <div className="col-10 mx-auto" >
                        <Navbar
                            className="navbar navbar-expand-lg navbar-light bg-light"
                            bg="light"
                            expand="lg" >
                            <NavLink
                                className="navbar-brand"
                                to="/Home" > Khan Motors
                                </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" >
                                { /* <Nav className="navbar-nav ml-auto mb-2 mb-lg-0"> */}
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
                                    <li className="nav-item" >
                                        <NavLink
                                            activeClassName="menu-active"
                                            className="nav-link "
                                            to="/Home" >
                                            Home </NavLink> </li>

                                    <li className="nav-item" >
                                        <NavLink
                                            activeClassName="menu-active"
                                            className="nav-link "
                                            to="Services" >
                                            Services </NavLink> </li>

                                    <li className="nav-item" >
                                        <NavLink
                                            activeClassName="menu-active"
                                            className="nav-link "
                                            to="About" >
                                            About </NavLink>
                                    </li>

                                    <li className="nav-item" >
                                        <NavLink
                                            activeClassName="menu-active"
                                            className="nav-link "
                                            to="Contact" >
                                            Contact </NavLink>
                                    </li>

                                </ul>
                                { /* </Nav> */}
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default NavBar;
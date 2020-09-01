import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from './Components/NavBar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';

function RouterPanel() {
    return ( <
        div >
        <
        BrowserRouter > {
            /* <Link className="Home" to="/Home" >Home</Link>
                            <Link className="Services" to="/Services" >Services</Link>
                            <Link className="About" to="/About" >About</Link> */
        } <
        Navbar / >
        <
        Routes >
        <
        Route path = "/Home"
        element = { < Home / > } > < /Route> <
        Route path = "About"
        element = { < About / > } > < /Route> <
        Route path = "Services"
        element = { < Services / > } > < /Route> <
        Route path = "*"
        element = { < NotFound / > } > < /Route> <
        /Routes> <
        /BrowserRouter> <
        /div>
    )
}

export default RouterPanel;
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Contact from './Components/Contact';

function RouterPanel() {
    return ( <
        div >
        <
        BrowserRouter >
        <
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
        Route path = "Contact"
        element = { < Contact / > } > < /Route> <
        Route path = "*"
        element = { < NotFound / > } > < /Route>

        <
        /Routes> <
        /BrowserRouter> <
        /div>
    )
}

export default RouterPanel;
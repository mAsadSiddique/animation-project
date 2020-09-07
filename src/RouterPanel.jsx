import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Contact from './Components/Contact';
import FooterBar from './Components/Footer';
import OurTeam from './Components/ourTeam';

function RouterPanel() {
    return (
        <div >
            <div>
                <Navbar />
            </div>

            <Routes >
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Home" element={< Home />} ></Route>
                <Route path="Team" element={< OurTeam />} > </Route>
                <Route path="About" element={< About />} > </Route>
                <Route path="Services" element={< Services />} > </Route>
                <Route path="Contact" element={< Contact />} > </Route>
                <Route path='*' element={<NotFound />} > </Route>
            </Routes>
            <FooterBar />
        </div>
    )
}

export default RouterPanel;
import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../../src/images/hero.jpg';
import Common from './Common';

function About() {



    return (
        <>
            <Common name="Welcome TO About Page Of"
                imgSrc={web}
                visit="/Contact"
                btnName="Contact Now" />
        </>
    );
}


export default About;
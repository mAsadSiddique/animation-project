import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../../src/images/Jaguar Logo 1.jpg';
import Common from './Common';

function About() {



    return (
        <>
            <Common name="Welcome To About Page of"
                imgSrc={web}
                visit="/Contact"
                btnName="Contact Now" />
        </>
    );
}


export default About;
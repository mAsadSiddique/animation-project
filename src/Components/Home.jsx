import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../../src/images/images.png';
import Common from './Common';

function Home(props) {



    return (
        <>
            <Common name="Grow Your Life Style With"
                imgSrc={web}
                visit="/Services"
                btnName="Get Started"
            />
        </>
    );
}


export default Home;
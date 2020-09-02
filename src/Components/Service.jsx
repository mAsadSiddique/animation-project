import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Services() {
    return ( <
        div >
        <
        div className = "my-5" >
        <
        h1 className = "text-center" > Our Services < /h1> <
        div className = "container-fluid mb-5" >
        <
        div className = "row" >
        <
        div className = "col-10 mx-auto" >
        <
        div className = "row" >
        <
        div className = "col-md-4 col-10 mx-auto" >
        <
        Card style = {
            { width: '18rem' } } >
        <
        Card.Img variant = "top"
        src = "holder.js/100px180" / >
        <
        Card.Body >
        <
        Card.Title > Card Title < /Card.Title> <
        Card.Text >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /Card.Text> <
        Button variant = "primary" > Go somewhere < /Button> <
        /Card.Body> <
        /Card> <
        /div> <
        /div> <
        /div>

        <
        /div>

        <
        /div> <
        /div> <
        /div>
    );
}


export default Services;
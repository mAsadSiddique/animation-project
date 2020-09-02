import React from 'react';
import { Card } from 'react-bootstrap';
import web from '../images/bike-illustration_1x.png';
import { NavLink } from 'react-router-dom';
import imgData from './ImagesData';


function setCard() {
    const data = imgData;
    console.log(data);
    return (
        data.map((data, ind) => {
            return (

                <
                div key = { ind }
                className = "col-md-4 d-flex col-12 mx-auto" >
                <
                Card >
                <
                Card.Img className = "card-img-top"
                variant = "top"
                src = { data.imgSrc }
                alt = { data.title }
                /> <
                Card.Body className = "card-body" >
                <
                Card.Title className = "card-title font-weight-bold" > { data.title } < /Card.Title> <
                Card.Text >
                Some quick example text to build on the card title and make up the bulk of the card 's content. <
                /Card.Text> <
                NavLink className = "btn btn-primary"
                to = "/Contact" > Go somewhere < /NavLink> <
                /Card.Body> <
                /Card> <
                /div>

            )
        })
    )
}

export default setCard;
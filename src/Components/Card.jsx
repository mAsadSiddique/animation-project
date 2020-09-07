import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function setCard(props) {
    return (


        <div
            className="col-md-4 d-flex col-12 mx-auto" >
            <Card >
                <Card.Img className="card-img-top card-img"
                    variant="top"
                    src={props.imgSrc}
                    alt={props.title}
                />
                <Card.Body className="card-body" >
                    <Card.Title className="card-title font-weight-bold" > {props.title} </Card.Title>
                    <Card.Text >
                        Some quick example text to build on the card title and make up the bulk of the card 's content.
                            </Card.Text>
                    <NavLink className="btn btn-primary"
                        to="/Contact" > Buy Now
                            </NavLink>
                </Card.Body>
            </Card> </div>

        // )
        // })
    )
}

export default setCard;
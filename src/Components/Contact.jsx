import React from 'react';
import { Form, Button, NavLink, Col } from 'react-bootstrap';

function Contact() {
    return ( <
        div className = "my-5" >
        <
        h1 className = "text-center" > Contact < /h1> <
        div className = "container contact_div" >
        <
        div className = "row" >
        <
        div className = "col-md-6 col-10 mx-auto" >
        <
        form >
        <
        Form.Row >
        <
        Col className = "mb-2" >
        <
        Form.Control placeholder = "First name" / >
        <
        /Col> <
        Col >
        <
        Form.Control placeholder = "Last name" / >
        <
        /Col> <
        /Form.Row> <
        Form.Group controlId = "exampleForm.ControlInput1" >
        <
        Form.Label > Email address < /Form.Label> <
        Form.Control type = "email"
        placeholder = "name@example.com" / >
        <
        /Form.Group> <
        Form.Group controlId = "exampleForm.ControlTextarea1" >
        <
        Form.Label > Example textarea < /Form.Label> <
        Form.Control as = "textarea"
        rows = "3" / >
        <
        /Form.Group> <
        Form.Group controlId = "formBasicPassword" >
        <
        Form.Label > Password < /Form.Label> <
        Form.Control type = "password"
        placeholder = "Password" / >
        <
        /Form.Group> <
        Form.Group controlId = "formBasicCheckbox" >
        <
        Form.Check type = "checkbox"
        label = "Check me out" / >
        <
        /Form.Group> <
        Button variant = "primary"
        type = "submit" >
        Submit <
        /Button> <
        /form> <
        /div>

        <
        /div> <
        /div> <
        /div>
    )
}

export default Contact;
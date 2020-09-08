import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
// import { First } from 'react-bootstrap/esm/PageItem';

function Contact() {
    let [data, setData] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        msg: "",
        password: "",
    });
    const InputEvent = (event) => {

        const { name, value } = event.target;
        setData((perVal) => {
            return {
                ...perVal,
                [name]: value,
            }
        })
        console.log(name, value);
    }
    const formSubmit = (ev) => {
        ev.preventDefault();
        alert(`My Name Is ${data.FirstName} ${data.LastName}. My Email Is ${data.email}, Here Is What I Want To Say ${data.msg}`);
    }

    return (
        <div className="my-5" >
            <h1 className="text-center" > Contact Us </h1>
            <div className="container contact_div" >
                <div className="row" >
                    <div className="col-md-6 col-10 mx-auto" >
                        <form onSubmit={formSubmit} >
                            <Form.Row >
                                <Col className="mb-2" >
                                    <Form.Control type="text"
                                        name="FirstName"
                                        value={data.FirstName}
                                        onChange={InputEvent}
                                        placeholder="First name"
                                        required /
                                    >
                                </Col>
                                <Col >
                                    <Form.Control name="LastName"
                                        value={data.LastName}
                                        onChange={InputEvent}
                                        placeholder="Last name"
                                        required /
                                    >
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlInput1" >
                                <Form.Label > Email address </Form.Label>
                                <Form.Control name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    type="email"
                                    placeholder="name@example.com"
                                    required />

                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1" >
                                <Form.Label > Example textarea </Form.Label>
                                <Form.Control name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    as="textarea"
                                    rows="3"
                                    required />

                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" >

                                <Form.Label > Password </Form.Label>

                                <Form.Control name="password"
                                    value={data.password}
                                    onChange={InputEvent}
                                    type="password"
                                    placeholder="Password"
                                    required />

                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" >

                                <Form.Check type="checkbox"
                                    label="Check me out" />
                            </Form.Group>
                            <Button variant="outline-primary"
                                type="submit" >Form Submitted
        </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;
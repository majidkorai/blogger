import React, { useState } from 'react';
import cookie from 'js-cookie'
import { useHistory, useLocation } from "react-router-dom";
import { Form, Button, Card } from 'react-bootstrap';

export default ({ store }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        store.logIn({
            "userName": `${email}`,
            "password": `${password}`
        }, () => {
            cookie.set('isloggedIn', true)
            window.location.href = "/";
        }, () => {
            console.log('user not found')
        });
    }
    return (

        <Card className="mt-5">
            <Card.Header>
            <h5>Login</h5>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </Card.Body>
        </Card>

    );
}
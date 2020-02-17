import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import cookie from 'js-cookie'
export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState('0');
    const history = useHistory()
    useEffect(() => {
        setIsLoggedIn(cookie.get('isloggedIn'))
    }, []);
    const handleLogout = () => {
        cookie.remove('isloggedIn');
        window.location.href = "/";
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Blogger</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/posts" className="nav-link">Posts</Link>
                    <Link to="/create-post" className="btn btn-outline-danger">Create A Post</Link>
                </Nav>
                <Form inline>
                    {isLoggedIn ? <Button onClick={handleLogout} variant="outline-success">Logout</Button> :  <Link to="/login" className="btn btn-success btn-outline">Login</Link>}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
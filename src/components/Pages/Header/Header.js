import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import "./Header.css"

const Header = () => {
  const [user]=useAuthState(auth)
  const handleSignOut=() => {
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="secondary" variant="dark">
        <Container>
        <Navbar.Brand as={Link}  to="/"><img src='' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link}  to="/services">Services</Nav.Link>
            <Nav.Link as={Link}  to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link}  to="/about">About</Nav.Link>
            <Nav.Link as={Link}  to="/blogs">Blogs</Nav.Link>
            {
              user ? <button onClick={handleSignOut}>Sign out</button>:
              <Nav.Link as={Link}  to="/login">Login</Nav.Link>
            }
          </Nav>
        
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
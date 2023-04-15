import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {Container,Image} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function NavBars() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
            <Image src="https://cdn.pixabay.com/photo/2020/03/08/16/04/pizza-4912871_960_720.png" alt="logo" style={{height:'60px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBars

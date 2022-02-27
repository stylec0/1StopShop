import React, { Component, PropTypes } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';


export default function Header( user, logout ) {
  console.log(user, '<---user in header', logout, "<---Handlelogout")
    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
          <Navbar.Brand href="/">1StopShop</Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/:username">My Profile</Nav.Link>
              <Nav.Link href="#home">My Cart</Nav.Link>
              <Nav.Link href="/login" onClick={user.logout}>LogOut</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}


//<NavDropdown title="Dropdown" id="basic-nav-dropdown">
//<NavDropdown.Item href="#link">My Profile</NavDropdown.Item>
//<NavDropdown.Item href="#action/3.2">My Cart</NavDropdown.Item>
//<NavDropdown.Divider />
//<NavDropdown.Item href="">SignOut</NavDropdown.Item>
//</NavDropdown>
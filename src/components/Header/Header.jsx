import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";

export default function Header({ user, handleLogout }) {
  return (
    <Navbar bg="primary" expand="xl" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image src={"https://i.imgur.com/s8KHD3u.png"} avatar></Image>
          <Link to="/">1StopShop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to={`/${user.username}`}>My Profile</Link>
            <Link to={`/${user.username}/cart`}>My Cart</Link>
            <Link to="/login" onClick={handleLogout}>
              LogOut
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
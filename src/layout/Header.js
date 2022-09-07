import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="light" expand="md">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/dashboard">Tickets</Nav.Link>
            <Nav.Link href="/dashboard">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" variant="light" expand="md">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tickets">
              <Nav.Link>Tickets</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={logOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

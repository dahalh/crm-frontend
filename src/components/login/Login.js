import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const intialState = {
  email: "",
  password: "",
};

export const Login = ({ handleOnShow }) => {
  const [formData, setFormData] = useState(intialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-info text-center">Client Login</h2>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={handleOnShow}>
            Forgot Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

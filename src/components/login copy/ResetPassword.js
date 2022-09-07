import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({ handleOnShow }) => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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

            <Button variant="primary" type="submit">
              Reset
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={handleOnShow}>
            Login Here
          </a>
        </Col>
      </Row>
    </Container>
  );
};

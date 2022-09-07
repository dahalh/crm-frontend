import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const AddTicketForm = () => {
  return (
    <div className="jumbotron">
      <Form
        autoComplete="off"
        //    onSubmit={handleOnSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            // onChange={handleOnChange}
            name="subject"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              // onChange={handleOnChange}
              type="date"
              name="issueDate"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Describe
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              // onChange={handleOnChange}
              as="textarea"
              type="date"
              name="details"
              rows="5"
            />
          </Col>
        </Form.Group>
        <div className="text-end mt-3">
          <Button type="submit" variant="primary" block>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

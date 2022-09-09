import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./add-ticket-form.css";
import PropTypes from "prop-types";

export const AddTicketForm = ({
  handleOnChange,
  handleOnSubmit,
  frmData,
  frmDataError,
}) => {
  console.log(frmData);
  return (
    <div className="jumbotron mt-3 bg-light add-new-ticket">
      <h1 className="text-center text-info">Add New Ticket</h1>
      <hr />
      <Form onSubmit={handleOnSubmit} autoComplete="off">
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group className="mt-3" as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={handleOnChange}
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Issue</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            as="textarea"
            name="detail"
            rows="5"
            value={frmData.detail}
            required
          />
        </Form.Group>
        <div className="text-end mt-3">
          <Button type="submit" variant="info">
            Open Ticket
          </Button>
        </div>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired,
};

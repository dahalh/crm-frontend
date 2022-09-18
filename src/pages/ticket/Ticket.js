import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket";

const ticket = tickets[0];
export const Ticket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Date: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-end">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket />
        </Col>
      </Row>
    </Container>
  );
};

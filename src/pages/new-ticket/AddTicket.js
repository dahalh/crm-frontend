import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};

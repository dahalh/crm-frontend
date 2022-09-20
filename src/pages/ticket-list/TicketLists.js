import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";
import { SearchForm } from "../../components/search-form/SearchForm";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-tickets.json";
import { Link } from "react-router-dom";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(e.target.value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setDisplayTicket(displayTickets);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BreadcrumbComp page="Ticket Lists" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Link to="/add-ticket">
              <Button variant="info">Add New Ticket</Button>
            </Link>
          </Col>
          <Col className="text-end">
            <SearchForm handleOnChange={handleOnChange} str={str} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <TicketTable tickets={displayTicket} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

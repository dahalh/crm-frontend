import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  useEffect(() => {}, [frmData, frmDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({ ...frmData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    console.log("Form submit request recieved", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDataError={frmDataError}
            frmData={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};

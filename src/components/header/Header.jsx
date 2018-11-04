import React from "react";
import { Container, Col, Row } from "reactstrap";
import { MAIN_TITLE } from "../../constants/Constants";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-3 custom-title">{MAIN_TITLE}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

import React from "react";
import { Container, Col, Row } from "reactstrap";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-3 custom-title">Forecast Web App</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

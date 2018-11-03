import React from "react";
import { Container, Col, Row, Navbar, NavbarBrand } from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {};

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar light expand="md">
            <NavbarBrand href="/">ForeCast</NavbarBrand>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

Header.propTypes = propTypes;

export default Header;

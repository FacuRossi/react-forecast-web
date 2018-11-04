import React, { Component } from "react";
import { Container, Col, Row, Form, FormGroup, Input } from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {
  onSubmit: PropTypes.func.isRequired
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: {},
      cityName: ""
    };
  }

  handleChange = event => {
    this.setState({ cityName: event.target.value });
  };

  clearInput = () => {
    this.setState({ cityName: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.cityName);
    this.clearInput();
  };

  render() {
    return (
      <Row className="custom-search-bar">
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                value={this.state.cityName}
                placeholder="City Name..."
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

SearchBar.propTypes = propTypes;

export default SearchBar;

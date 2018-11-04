import React, { Component } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroup,
  Button
} from "reactstrap";
import PropTypes from "prop-types";
import {
  SEARCH_BAR_PLACEHOLDER,
  SEARCH_BUTTON
} from "../../constants/Constants";

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

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.cityName);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ cityName: "" });
  };

  render() {
    return (
      <Row className="custom-search-bar">
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  value={this.state.cityName}
                  placeholder={SEARCH_BAR_PLACEHOLDER}
                  onChange={this.handleChange}
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={this.handleSubmit} color="info">
                    {SEARCH_BUTTON}
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

SearchBar.propTypes = propTypes;

export default SearchBar;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "reactstrap";
import SearchBar from "../searchbar/SearchBar";
import CityInfo from "../city/CityInfo";
import CardList from "../lists/CardList";
import { getForecastByCityName } from "../../services/ForecastService";

const propTypes = {};

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySeleted: {},
      isCitySelected: false
    };
  }

  onFetchCity = city => {
    getForecastByCityName(city)
      .then(response => {
        this.setState({ citySeleted: response.data, isCitySelected: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <SearchBar onSubmit={this.onFetchCity} />
        </Row>
        <Row>
          <Col xs="2">
            {
              <CardList
                city={this.state.isCitySelected ? this.state.citySeleted : {}}
              />
            }
          </Col>
          <Col xs="10">
            {this.state.isCitySelected && (
              <CityInfo city={this.state.citySeleted} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

Panel.propTypes = propTypes;

export default Panel;

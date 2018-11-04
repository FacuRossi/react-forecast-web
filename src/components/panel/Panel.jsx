import React, { Component } from "react";
import { Container, Col, Row, Modal, Alert } from "reactstrap";
import SearchBar from "../searchbar/SearchBar";
import CityInfo from "../city/CityInfo";
import CardList from "../lists/CardList";
import { getForecastByCityName } from "../../services/ForecastService";
import { ERROR_CITY_NOT_FOUND } from "../../constants/Constants";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySeleted: {},
      isCitySelected: false,
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onFetchCity = city => {
    getForecastByCityName(city)
      .then(response => {
        this.setState({ citySeleted: response.data, isCitySelected: true });
      })
      .catch(error => {
        this.toggle();
      });
  };

  onCitySelectedChange = citySeleted => {
    this.setState({ citySeleted, isCitySelected: true });
  };

  render() {
    return (
      <Container fluid={true}>
        <SearchBar onSubmit={this.onFetchCity} />
        <Row>
          <Col lg="2" md="12">
            {
              <CardList
                city={this.state.isCitySelected ? this.state.citySeleted : {}}
                changeSelectedCity={this.onCitySelectedChange}
              />
            }
          </Col>
          <Col lg="10" md="12">
            {this.state.isCitySelected && (
              <CityInfo city={this.state.citySeleted} />
            )}
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          centered
          size="sm"
        >
          <Alert className={"custom-alert"} color="danger">
            {ERROR_CITY_NOT_FOUND}
          </Alert>
        </Modal>
      </Container>
    );
  }
}

export default Panel;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Jumbotron, Row, Col } from "reactstrap";
import GoogleMap from "./GoogleMap";

const propTypes = {
  city: PropTypes.object
};

class CityInfo extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="custom-bg">
          <Row>
            <Col xs="4">
              <h1 className="display-3">{this.props.city.main.temp}</h1>
              <p className="lead">{`The min temp is ${
                this.props.city.main.temp_min
              } and the max for today is ${this.props.city.main.temp_max}`}</p>
              <hr className="my-2" />
              <p>
                {this.props.city.main.pressure} And{" "}
                {this.props.city.main.humidity}
              </p>
            </Col>
            <Col xs="8">
              {/* <GoogleMap
                lat={this.props.city.coord.lat}
                lng={this.props.city.coord.lon}
              /> */}
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

CityInfo.propTypes = propTypes;

export default CityInfo;

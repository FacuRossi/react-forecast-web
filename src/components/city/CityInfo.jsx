import React, { Component } from "react";
import PropTypes from "prop-types";
import { Jumbotron, Row, Col } from "reactstrap";
import { getSvgFromWeather } from "../../utils/SvgUtils";
import GoogleMap from "./GoogleMap";

const propTypes = {
  city: PropTypes.object
};

class CityInfo extends Component {
  convertToCelsius = kelvin => {
    return (kelvin - 273.15).toFixed(2);
  };

  render() {
    return (
      <div>
        <Jumbotron className="custom-bg">
          <Row>
            <Col xs="4">
              <div style={{ display: "flex" }}>
                {getSvgFromWeather(this.props.city.weather[0].main)}
                <h1>
                  {`${this.convertToCelsius(this.props.city.main.temp)}°C`}{" "}
                </h1>
              </div>
              <p className="lead">
                {`Humidity: ${this.props.city.main.humidity}%`}
                <br />
                {`Pressure: ${this.props.city.main.pressure} hPa`}
                <br />
                {`Max Temp: ${this.convertToCelsius(
                  this.props.city.main.temp_max
                )} °C`}
                <br />
                {`Min Temp: ${this.convertToCelsius(
                  this.props.city.main.temp_min
                )} °C`}
                <br />
              </p>
            </Col>
            <Col xs="8">
              <GoogleMap
                lat={this.props.city.coord.lat}
                lng={this.props.city.coord.lon}
              />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

CityInfo.propTypes = propTypes;

export default CityInfo;

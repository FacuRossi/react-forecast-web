import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Row, Col } from "reactstrap";
import { getSvgFromWeather } from "../../utils/SvgUtils";
import {
  CELSIUS,
  PERCENTAGE,
  H_PASC,
  PRESSURE,
  HUMIDITY,
  MIN_TEMP,
  MAX_TEMP
} from "../../constants/Constants";
import GoogleMap from "./GoogleMap";

const propTypes = {
  city: PropTypes.object
};

const CityInfo = props => {
  const convertToCelsius = kelvin => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div>
      <Jumbotron className="custom-bg">
        <Row>
          <Col xs="4">
            <div style={{ display: "flex" }}>
              {getSvgFromWeather(props.city.weather[0].main)}
              <h1>{`${convertToCelsius(props.city.main.temp)}${CELSIUS}`} </h1>
            </div>
            <p className="lead">
              {`${HUMIDITY}: ${props.city.main.humidity}${PERCENTAGE}`}
              <br />
              {`${PRESSURE}: ${props.city.main.pressure} ${H_PASC}`}
              <br />
              {`${MAX_TEMP}: ${convertToCelsius(
                props.city.main.temp_max
              )} ${CELSIUS}`}
              <br />
              {`${MIN_TEMP}: ${convertToCelsius(
                props.city.main.temp_min
              )} ${CELSIUS}`}
              <br />
            </p>
          </Col>
          <Col xs="8">
            <GoogleMap lat={props.city.coord.lat} lng={props.city.coord.lon} />
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

CityInfo.propTypes = propTypes;

export default CityInfo;

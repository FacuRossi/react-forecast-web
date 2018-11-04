import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

const propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    const { lat, lng } = props;
    this.state = { center: { lat, lng } };
  }

  componentDidUpdate(prevProps) {
    if (this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
      this.setState({
        center: { lat: this.props.lat, lng: this.props.lng }
      });
    }
  }
  //AIzaSyBihOZg8fKdhszGNPGdFFZrj7avdjTEYTg
  render() {
    return (
      <div style={{ height: "50vh", width: "75%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD6kixofLg4seM7aWKn9C7Il6_HCaCZxi0 " }}
          center={this.state.center}
          zoom={11}
        />
      </div>
    );
  }
}

GoogleMap.propTypes = propTypes;

export default GoogleMap;

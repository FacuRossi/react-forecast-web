import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import {
  GOOGLE_MAP_API_KEY,
  GOOGLE_MAP_DEFAULT_ZOOM
} from "../../config/settings";

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
  render() {
    return (
      <div className="custom-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          center={this.state.center}
          zoom={GOOGLE_MAP_DEFAULT_ZOOM}
        />
      </div>
    );
  }
}

GoogleMap.propTypes = propTypes;

export default GoogleMap;

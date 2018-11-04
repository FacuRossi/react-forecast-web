import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import {
  addItemInArray,
  getItem,
  deleteItemInArray
} from "../../utils/LocalStorage";
import { MAX_CITIES_ALLOWED } from "../../config/settings";

const propTypes = {
  city: PropTypes.object,
  changeSelectedCity: PropTypes.func
};

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { cities: [] };
  }

  deleteCity = name => {
    this.setState({
      cities: this.state.cities.filter(city => city.name !== name)
    });
    deleteItemInArray("cities", name);
  };

  isCity = name => {
    const names = this.state.cities.map(city => city.name);
    return names.includes(name);
  };

  onCitySelectedChange = city => {
    this.props.changeSelectedCity(city);
  };

  componentDidMount() {
    const savedCities = getItem("cities");
    if (savedCities) {
      this.setState({ cities: savedCities });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !this.isCity(this.props.city.name) &&
      this.props.city.name !== prevProps.city.name
    ) {
      let copy = [...this.state.cities];
      let cities =
        copy.length >= MAX_CITIES_ALLOWED
          ? copy.slice(1).concat(this.props.city)
          : copy.concat(this.props.city);
      this.setState({ cities });
      addItemInArray("cities", this.props.city);
    }
  }

  render() {
    return (
      <div>
        <h4 className="custom-title">Last Searches</h4>
        <Card>
          {this.state.cities.map(city => {
            return (
              <div key={city.name} className="last-searchs-item">
                <Button
                  close
                  onClick={() => this.deleteCity(city.name)}
                  className="delete-btn"
                />
                <Button
                  onClick={() => this.onCitySelectedChange(city)}
                  color="link"
                >
                  {city.name}
                </Button>
              </div>
            );
          })}
        </Card>
      </div>
    );
  }
}

CardList.propTypes = propTypes;

export default CardList;

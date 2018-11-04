import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "reactstrap";
import { LS_KEY_CITIES, LAST_SEARCHES } from "../../constants/Constants";
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

  handleDeleteCity = name => {
    this.setState({
      cities: this.state.cities.filter(city => city.name !== name)
    });
    deleteItemInArray(LS_KEY_CITIES, name);
  };

  wasCitySearched = name => {
    return this.state.cities.map(city => city.name).includes(name);
  };

  handleCitySelectedChange = city => {
    this.props.changeSelectedCity(city);
  };

  componentDidMount() {
    const savedCities = getItem(LS_KEY_CITIES);
    if (savedCities) {
      this.setState({ cities: savedCities });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !this.wasCitySearched(this.props.city.name) &&
      this.props.city.name !== prevProps.city.name
    ) {
      let copy = [...this.state.cities];
      const cities =
        copy.length >= MAX_CITIES_ALLOWED
          ? copy.slice(1).concat(this.props.city)
          : copy.concat(this.props.city);
      this.setState({ cities });
      addItemInArray(LS_KEY_CITIES, this.props.city);
    }
  }

  render() {
    return (
      <div>
        <h4 className="custom-title">{LAST_SEARCHES}</h4>
        <Card>
          {this.state.cities.map(city => {
            return (
              <div key={city.name} className="last-searchs-item">
                <Button
                  close
                  onClick={() => this.handleDeleteCity(city.name)}
                  className="delete-btn"
                />
                <Button
                  onClick={() => this.handleCitySelectedChange(city)}
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

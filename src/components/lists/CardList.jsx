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
  city: PropTypes.object
};

class CardList extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = { cities: Object.keys(city).length !== 0 ? [city] : [] };
  }

  deleteCity = name => {
    this.setState({
      cities: this.state.cities.filter(city => city.name !== name)
    });
    deleteItemInArray("cities", name);
  };

  componentDidMount() {
    const savedCities = getItem("cities");
    if (savedCities) {
      this.setState({ cities: savedCities });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
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
        {this.state.cities.map(city => {
          return (
            <Card key={city.name} className="custom-bg">
              <CardBody>
                <CardTitle>
                  <Button close onClick={() => this.deleteCity(city.name)} />
                </CardTitle>
                <CardText>{city.name}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </div>
    );
  }
}

CardList.propTypes = propTypes;

export default CardList;

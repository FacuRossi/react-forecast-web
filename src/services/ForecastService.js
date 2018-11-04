import axios from "axios";
import { API_URL, API_KEY } from "../config/settings";

/**
 * Call Forecast API and get a city by name.
 *
 * @param {String} cityName name used by Api to identify a city.
 *
 */
export const getForecastByCityName = cityName => {
  const url = `${API_URL}?q=${cityName}&APPID=${API_KEY}`;
  return axios.get(url);
};

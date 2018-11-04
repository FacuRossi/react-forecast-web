import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* eslint-disable import/first */
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/forecast.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

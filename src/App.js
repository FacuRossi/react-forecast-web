import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Panel from "./components/panel/Panel";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Panel />
      </div>
    );
  }
}

export default App;

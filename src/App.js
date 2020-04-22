import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import STORE from "./dummy-store";

class App extends Component {

  //create updateMain(){} - depending on the page it
  //renders different content
  //create updateSidebar(){}- depending on the page it
  //renders different content
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;

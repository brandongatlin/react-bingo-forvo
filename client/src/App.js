import React, { Component } from "react";
import "./App.css";

import Card from "./components/card";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id='gameBoard'>
          <div id='bingoCard'>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Raw from './Components/Raw'

class App extends Component {
  state = {
    grid: {line1: ["empty","empty","empty","empty","empty","empty"],
      line2: ["empty","empty","empty","empty","empty","empty"],
      line3: ["empty","empty","empty","empty","empty","empty"],
      line4: ["empty","empty","empty","empty","empty","empty"],
      line5: ["empty","empty","empty","empty","empty","empty"],
      line6: ["empty","empty","empty","empty","empty","empty"]
    },
    turn: "blue"
  }

  insertToken = (selection) => {
    console.log(selection)
    if (this.state.turn==="blue") {
      this.setState ({turn: "red"});
    }
    else {
      this.setState ({turn: "blue"});
    }
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Raw
              lineGrid = {this.state.grid.line1}
              clicked = {this.insertToken}
            />
          </div>
          <div className="row">
            <Raw
              lineGrid = {this.state.grid.line2}
              clicked = {this.insertToken}
            />
          </div>
          <div className="row">
            <Raw
              lineGrid = {this.state.grid.line3}
              clicked = {this.insertToken}
            />
          </div>
          <div className="row">
            <Raw
              lineGrid = {this.state.grid.line4}
              clicked = {this.insertToken}
            />
          </div>
          <div className="row">
            <Raw
              lineGrid = {this.state.grid.line5}
              clicked = {this.insertToken}
            />
          </div>
          <div className="row">
            <Raw
              lineGrid = {this.state.grid.line6}
              clicked = {this.insertToken}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

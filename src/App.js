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
    turn: "blue",
  }
  
  insertToken = (column) => {
    console.log(column)
    if (this.state.turn==="blue") {
      this.setState ({turn: "red"});
    }
    else {
      this.setState ({turn: "blue"});
    }

    for (let i=6; i>0; i--) {
      if (this.state.grid["line"+[i]][column]==="empty"){
        let line = "line"+[i];
        const grid = { ...this.state.grid};
        grid[line][column]=this.state.turn;
        this.setState({grid:grid})
        this.checkwinner(column, i);
        break;
      }
    }
    console.log(this.state);
  }

  checkwinner= (column, line) => {
    console.log(column, line)
    console.log(this.state.grid["line"+line][column])
    console.log(this.state.grid["line"+(parseInt(line)+1)]);
    
    if (this.state.grid["line"+(parseInt(line)+3)]) {
      if (this.state.turn===this.state.grid["line"+(parseInt(line)+1)][column] && this.state.turn && this.state.turn===this.state.grid["line"+(parseInt(line)+2)][column]&&this.state.turn===this.state.grid["line"+(parseInt(line)+3)][column]) {
        alert(this.state.turn+" wins!");
        this.resetGame();
      }
    }

    else if (this.state.grid["line"+(parseInt(line)+3)]) {
      if (this.state.turn===this.state.grid["line"+(parseInt(line)+1)][column] && this.state.turn && this.state.turn===this.state.grid["line"+(parseInt(line)+2)][column]&&this.state.turn===this.state.grid["line"+(parseInt(line)+3)][column]) {
        alert(this.state.turn+" wins!");
        this.resetGame();
      }
    }

  }

  resetGame = () => {
    this.setState({
      grid: {line1: ["empty","empty","empty","empty","empty","empty"],
           line2: ["empty","empty","empty","empty","empty","empty"],
           line3: ["empty","empty","empty","empty","empty","empty"],
           line4: ["empty","empty","empty","empty","empty","empty"],
           line5: ["empty","empty","empty","empty","empty","empty"],
           line6: ["empty","empty","empty","empty","empty","empty"]
    },
    turn: "blue",
    })
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
        <button type="button" class="btn btn-primary" onClick={this.resetGame}>Reset game</button>
      </div>
    );
  }
}

export default App;

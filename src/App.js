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
        this.checkVertical(column, i);
        break;
      }
    }
    console.log(this.state);
  }

  checkVertical = (column, line) => {
    if (this.state.grid["line"+(parseInt(line)+3)]) {  //checks down from the last token

      if (this.state.turn===this.state.grid["line"+(parseInt(line)+1)][column] && 
      this.state.turn===this.state.grid["line"+(parseInt(line)+2)][column] &&
      this.state.turn===this.state.grid["line"+(parseInt(line)+3)][column]) {
        alert(this.state.turn+" wins!");
        this.resetGame();
      } else {
        this.checkHorizontal(column, line);
      }
    } else {
      this.checkHorizontal(column, line);
    }
  }

  checkHorizontal (column, line) {
    let counter = 1; //if it gets to 4 the player will win

    if (this.state.grid["line"+line][column+1]===this.state.turn) {
      counter++;
      if (this.state.grid["line"+line][column+2]===this.state.turn) {
        counter++;
        if (this.state.grid["line"+line][column+3]===this.state.turn) {
          counter++;
        }
      }
    }
    if (this.state.grid["line"+line][column-1]===this.state.turn) {
      counter++;
      if (this.state.grid["line"+line][column-2]===this.state.turn) {
        counter++;
        if (this.state.grid["line"+line][column-3]===this.state.turn) {
          counter++;
        }
      }
    }
    if (counter===4) {
      alert(this.state.turn+" wins!");
      this.resetGame();
    } else {
      this.checkDiagonal(column, line);
    }
  }

  checkDiagonal = (column, line) => {
    
    if (this.state.grid["line"+(parseInt(line)+3)]) { //checks down from the last token

      if (this.state.turn===this.state.grid["line"+(parseInt(line)+1)][column+1] && 
      this.state.turn===this.state.grid["line"+(parseInt(line)+2)][column+2] &&
      this.state.turn===this.state.grid["line"+(parseInt(line)+3)][column+3]) {
        alert(this.state.turn+" wins!");
        this.resetGame();
      }
      else if (this.state.turn===this.state.grid["line"+(parseInt(line)+1)][column-1] && 
      this.state.turn===this.state.grid["line"+(parseInt(line)+2)][column-2] &&
      this.state.turn===this.state.grid["line"+(parseInt(line)+3)][column-3]) {
        alert(this.state.turn+" wins!");
        this.resetGame();
      }
    } else { //checks up from the last token
      if (this.state.turn===this.state.grid["line"+(parseInt(line)-1)][column+1] && 
      this.state.turn===this.state.grid["line"+(parseInt(line)-2)][column+2] &&
      this.state.turn===this.state.grid["line"+(parseInt(line)-3)][column+3]) {
        alert(this.state.turn+" wins!");
        this.resetGame();
      }
      else if (this.state.turn===this.state.grid["line"+(parseInt(line)-1)][column-1] && 
      this.state.turn===this.state.grid["line"+(parseInt(line)-2)][column-2] &&
      this.state.turn===this.state.grid["line"+(parseInt(line)-3)][column-3]) {
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

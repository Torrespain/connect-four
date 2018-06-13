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

  insertToken = (column) => {
    console.log(column)
    if (this.state.turn==="blue") {
      this.setState ({turn: "red"});
    }
    else {
      this.setState ({turn: "blue"});
    }
        
    // if (this.state.grid[tokenFalling])
    // console.log (this.state.grid[tokenFalling])

    for (let i=6; i>0; i--) {
      console.log("line"+[i]+" " ,this.state.grid["line"+[i]][column])
      if (this.state.grid["line"+[i]][column]==="empty"){
        console.log("hi")
        const grid = { ... this.state.grid}
        grid["line"+[i]][column]=this.state.turn
        console.log(grid)
        // this.setState({})
        break
      }
        
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

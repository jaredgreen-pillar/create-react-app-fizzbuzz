import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br></br>
        <label id='instructions'>Enter a number in the text area to play!</label>
        <br></br>
        <br></br>
        <input id='numberInput' type="number"></input>
        <br></br>
        <button id='submitButton'>Submit</button>
        <br></br>
        <label id='result'></label>
      </div>
    );
  }
}

export default App;

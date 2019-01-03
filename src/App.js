import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultText: '',
      inputValue: ''
    }
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <label id='instructions'>Enter a number in the text area to play!</label>
        <br></br>
        <br></br>
        <input id='numberInput' type="number" onChange={this.updateInputValue}></input>
        <br></br>
        <button id='submitButton' onClick={this.onClickHandler}>Submit</button>
        <br></br>
        <label id='result'>{this.state.resultText}</label>
      </div >
    );
  }

  onClickHandler = () => {
    this.setState({
      resultText: this.calculateFizzbuzz(this.state.inputValue)
    });
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  calculateFizzbuzz(number) {
    if(number === "") return "";

    switch (0) {
      case number:
        return number.toString()
      case (number % 15):
        return 'fizzbuzz';
      case (number % 3):
        return 'fizz'
      case (number % 5):
        return 'buzz'
      default:
        return number.toString();
    }
  }
}

export default App;

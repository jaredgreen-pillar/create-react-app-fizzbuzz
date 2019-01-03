import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Page Contains Basic Elements', () => {
  var app;

  beforeEach(() => {
    app = mount(<App />)
  });

  it('should have a button Submit', () => {
    expect(app.find('#submitButton').text()).toEqual("Submit");
    expect(app.find('#submitButton').type()).toEqual("button");
  });

  it('should have an empty input', () => {
    expect(app.find('#numberInput').text()).toEqual("");
    expect(app.find('#numberInput').type()).toEqual("input");
    expect(app.find('#numberInput').prop('type')).toEqual("number");
  });

  it('should have an empty label initially', () => {
    expect(app.find('#result').text()).toEqual("");
    expect(app.find('#result').type()).toEqual("label");
  });

  it('should contain the label with instructions', () => {
    expect(app.find('#instructions').text()).toEqual("Enter a number in the text area to play!")
    expect(app.find('#instructions').type()).toEqual("label");
  });
});

describe('calculateFizzbuzz', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  it('returns the given number', () => {
    expect(app.calculateFizzbuzz(1)).toEqual("1");
  });

  it('given a 3 returns a fizz', () => {
    expect(app.calculateFizzbuzz(3)).toEqual("fizz");
  });

  it('given a 5 returns a buzz', () => {
    expect(app.calculateFizzbuzz(5)).toEqual("buzz");
  });

  it('given a multiple of three, returns fizz', () => {
    expect(app.calculateFizzbuzz(3)).toEqual("fizz");
    expect(app.calculateFizzbuzz(33)).toEqual("fizz");
    expect(app.calculateFizzbuzz(12)).toEqual("fizz");
    expect(app.calculateFizzbuzz(3333)).toEqual("fizz");
    expect(app.calculateFizzbuzz(9)).toEqual("fizz");
  });

  it('given a multiple of five, returns buzz', () => {
    expect(app.calculateFizzbuzz(5)).toEqual("buzz");
    expect(app.calculateFizzbuzz(55)).toEqual("buzz");
    expect(app.calculateFizzbuzz(25)).toEqual("buzz");
    expect(app.calculateFizzbuzz(5555)).toEqual("buzz");
    expect(app.calculateFizzbuzz(95)).toEqual("buzz");
  });

  it('given a 15, returns fizzbuzz', () => {
    expect(app.calculateFizzbuzz(15)).toEqual("fizzbuzz");
  });

  it('given a multiple of 15, returns fizzbuzz', () => {
    const randomInt = Math.ceil((Math.random() + .01) * 100);
    expect(app.calculateFizzbuzz(15 * randomInt)).toEqual("fizzbuzz");
  });

  it('given empty string, returns empty string', () => {
    expect(app.calculateFizzbuzz("")).toEqual("");
  });

  it('given zero, returns empty string', () => {
    expect(app.calculateFizzbuzz(0)).toEqual("0");
  });
});

describe('Fizzbuzz Integration tests', () => {
  var app;

  beforeEach(() => {
    app = mount(<App />)
  });

  it('given the submit button is clicked, the result label should be updated to display a value', () => {
    app.find('#numberInput').simulate('change', { target: { value: '1' } });
    app.find('#submitButton').simulate('click')
    app.update();
    expect(app.find('#result').text()).toBeTruthy();
  });

  it('given an input value when the submit button is clicked, the result label should be updated to display a value', () => {
    app.find('#numberInput').simulate('change', { target: { value: '9' } });
    app.find('#submitButton').simulate('click')
    app.update();
    expect(app.find('#result').text()).toEqual('fizz');
  });

  it('given an input value 15 when the submit button is clicked, the result label should be updated to display fizzbuzz', () => {
    app.find('#numberInput').simulate('change', { target: { value: '15' } });
    app.find('#submitButton').simulate('click')
    app.update();
    expect(app.find('#result').text()).toEqual('fizzbuzz');
  });

});
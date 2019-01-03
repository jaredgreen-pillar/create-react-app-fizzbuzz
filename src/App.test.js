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

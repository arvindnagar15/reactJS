import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.headerText}</h1>
        <h2>{this.props.contentText}</h2>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUploaderContainer from './components/FileUploaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileUploaderContainer />
      </div>
    );
  }
}

export default App;

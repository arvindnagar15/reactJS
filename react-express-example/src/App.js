import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  handleClik(e) {
   alert('aaa');
    e.preventDefault();
    
    axios.post('/serverport/add')
    .then(res => console.log(res.data));
    
}
handleDownload(e) {
  alert('aaa');
   e.preventDefault();
   
   axios.post('/serverport/download')
   .then(res => console.log(res.data));
   
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>asasassas
        <button name="Submit" onClick={this.handleClik}>Submit</button>
        <button name="Submit" onClick={this.handleDownload}>Submit</button>
      </div>
    );
  }
}

export default App;

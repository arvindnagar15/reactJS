import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        //fileName = ''
    }
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  handleUploadImage(ev) {
    ev.preventDefault();
    
    fetch('/api')
      .then(res => {
        const persons = res.data;
        console.log('persons', persons);
      })


    // const data = new FormData();
    // data.append('file', this.uploadInput.files[0]);
    // console.log('filename',  this.uploadInput.files[0]);
    // fetch('http://localhost:4000/upload', {
    // method: 'POST',
    // body: data
    // }).then(response => {
    //   response.json().then(body => {
    //     console.log("Error...");
    //     var result = `${body.file}`;
    //     console.log('result : ',result);  
    //     console.log('result new : ', JSON.parse(result));
    //   //this.setState({ imageURL: `http://localhost:4000/${body.file}` });
    //   });
    // });
    }

  render() {
    return (
      <div className="App">
        <form >
        <div>
          <input ref={ref => {this.uploadInput = ref;}} type="file" onChange={this.handleUploadImage}/>
        </div>
        <br />
        
        <br />
        
        </form>
      </div>
    );
  }
}

export default App;

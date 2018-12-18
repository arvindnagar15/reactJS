import React, { Component } from 'react';
import axios, { post } from 'axios';

var express = require("express"),
    app = express(),
    upload = require('express-fileupload');
app.use(upload())

class FileUploaderForm_new extends Component {
  constructor(props){
    super(props);
    this.state = {
        //fileName = ''
    }
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  handleUploadImage(ev) {
    ev.preventDefault();
    
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    console.log('filename',  this.uploadInput.files[0]);

    var file = this.uploadInput.files[0]
    
    fetch('http://localhost:4000/upload', {
    method: 'POST',
    body: data
    }).then(response => {
      response.json().then(body => {
        console.log("Error...");
        var result = `${body.file}`;
        console.log('result : ',result);  
        console.log('result new : ', JSON.parse(result));
      //this.setState({ imageURL: `http://localhost:4000/${body.file}` });
      });
    });
    }
  render() {
    return (
    <div className="App">
      <h1>FileUpload</h1>
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

export default FileUploaderForm_new;

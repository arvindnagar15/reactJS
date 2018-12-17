import React, { Component } from "react";
//import { render } from "react-dom";

//import ReactDropzone from "react-dropzone";
//import request from "superagent";
import ImageDropAndCrop from './learn/ImgDropAndCrop';
export class App extends Component {
  

  render() {
    return (
      
      <div className="App">
        <ImageDropAndCrop />
      </div>
    );
  }
}

export default App;

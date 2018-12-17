import React, { Component } from 'react'
import { render } from 'react-dom'

import Dropzone from 'react-dropzone'
//import request from "superagent";
class ImageDropAndCrop extends Component {
  render() {
    return (
      <div>
          <h1>Drop and Crop</h1>
          <Dropzone>Drop file here</Dropzone>
      </div>
    )
  }
}

export default ImageDropAndCrop;
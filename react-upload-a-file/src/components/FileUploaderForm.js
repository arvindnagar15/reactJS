import React, { Component } from 'react';
import axios, { post } from 'axios';

class FileUploaderForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        //fileName = ''
    }
  }
  onChange(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
        console.warn("file data : ", e.target.result)
        const url = "";
        //const formData = {file: e.target.result}
        //return post(url, formData)
          //  .then(response => console.warn("result", response)) 
    }
  }
    render() {
    return (
      <div className="FileUploaderForm">
        <div onSubmit={this.onFormSubmit}>
            <input type="file" name="file" id="file" accept=".xls, .xlsx" onChange={(e)=> this.onChange(e)} />
        </div>
      </div>
    );
  }
}

export default FileUploaderForm;

import React, { Component } from 'react';
import FileUploaderForm from './FileUploaderForm'
import FileUploaderFormNew from './FileUploaderForm_new'


class FileUploaderContainer extends Component {
  render() {
    return (
      <div className="fileUploaderContainer">
        <h3>Upload a file</h3>
        <FileUploaderForm />
      </div>
    );
  }
}

export default FileUploaderContainer;

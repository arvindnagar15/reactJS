import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is header text</h1>
        <h2>This is content text</h2>
        <h3>Name : {this.props.name}</h3>
        <h3>Array : {this.props.propArray}</h3>
        <h3>Boolean : {this.props.propBool?"True":"False"}</h3>
        <h3>Function : {this.props.propFunc(10)}</h3>
        <h3>Number : {this.props.propNumber}</h3>
      </div>
    );
  }
}
App.propTypes = {
  name: PropTypes.string,
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
};
App.defaultProps = {
  name: 'Arvind Nagar',
  propArray: [1, 2, 3, 4],
  propBool: true,
  propFunc: function(e){
    return e
  },
  propNumber: 1,
}
export default App;

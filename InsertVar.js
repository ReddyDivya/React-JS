import React, { Component } from 'react';
import './App.css';

const name = 'Manu'
const elem = <h1>Hello {name}</h1>;

class InsertVar extends Component {
  render() {
    return (
        //This is JSX
       React.createElement('div', null, elem)
    );
  }
}

export default InsertVar;
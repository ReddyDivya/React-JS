import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        //This is JSX
      /*
      Sample 1
      <div className="App">
        <h1>Hello World</h1>
      </div>
      */
       //React.createElement('div', null, 'h2', 'coding' ); //h2 is not rendered as HTML tag

       React.createElement('div', null, "Outer-div",
            React.createElement('h1', null, 'This is h1'),
            React.createElement('h2', null, 'This is h2'),
            React.createElement('h3', null, 'This is h3'),
            React.createElement('h4', null, 'This is h4'),
            React.createElement('h5', null, 'This is h5'),
            React.createElement('h6', null, 'This is h6'),//creating h6 in a div
            React.createElement('div', null, 'inner-div',
              React.createElement('p', null, "inner para") 
            )//inner div
       )//outer div
    );
  }
}

export default App;

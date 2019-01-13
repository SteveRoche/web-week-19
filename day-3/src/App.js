import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';

import './App.css';
const ic = require('./assets/ic.png');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
        <img src={ic} alt="" id="ic" />
      </div>
    );
  }
}

export default App;

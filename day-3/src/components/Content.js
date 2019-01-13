import React, { Component } from 'react';
import AcademicsView from './AcademicsView';
import Header from './Header';

class ShadowText extends Component {
  render() {
    return (
      <span className="ShadowText">
        Man<span>i</span>pal
      </span>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Header />
        <AcademicsView />
        <ShadowText />
      </div>
    );
  }
}

export default Content;

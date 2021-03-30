import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {

  state = {
    total: null,
    next: null,
    operation: null,
  };

  handlePress = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel pressHandler={this.handlePress} />
      </>
    );
  }
}

import React, { Component } from 'react';

import './style.css';

export default class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {coins: 0};
  }
  render() {
    const { className, ...props } = this.props;
    return (
      <div {...props} className={["inventory", className].join(' ')}>
        <div className="coins"></div>
        <div className="left">{this.state.coins}</div>
      </div>
    );
  }
}

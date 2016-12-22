import React, { PropTypes, Component } from 'react';

import './style.css';

export default class NotFound extends Component {

  render() {
    const { ...props } = this.props;
    return (
      <div {...props}>
        <h1>
          City
        </h1>
      </div>
    );
  }
}

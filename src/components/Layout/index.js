import React, { Component } from 'react';
import Menu from '../Menu';

import './style.css';

class Layout extends Component {
  render() {
    const {className} = this.props;

    return (
      <div className={["App", className].join(' ')}>
        <Menu {...this.props} />
        {this.props.children}

      </div>
    );
  }
}

export default Layout;

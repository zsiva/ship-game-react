import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Inventory from '../Inventory';
import Button from '../Button';

import './style.css';

class Layout extends Component {
  render() {
    const {routeParams, className} = this.props;

    return (
      <div className={["App", className].join(' ')}>
        {this.props.children}
        {Object.keys(routeParams).length > 0 &&
          <Button
            className="absolute"
            style={{left: '10px'}} text="Back to sailing"
            onClick={() => browserHistory.push(`/`)}/>}
        <Inventory className="absolute" style={{right: '10px'}}/>
      </div>
    );
  }
}

export default Layout;

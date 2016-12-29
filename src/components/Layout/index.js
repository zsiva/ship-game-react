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
        <div className="menu">
          {Object.keys(routeParams).length > 0 &&
            <Button text="Back to sailing" size="small"
              onClick={() => browserHistory.push(`/`)}/>
          }
            <Inventory className="pull-right"/>
        </div>
        {this.props.children}

      </div>
    );
  }
}

export default Layout;

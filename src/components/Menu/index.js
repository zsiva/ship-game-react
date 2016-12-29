import React from 'react';
import {browserHistory} from 'react-router';
import Inventory from '../Inventory';
import Button from '../Button';

import './style.css';

const Menu = (props) => {
  return (
    <div className="menu">
      {Object.keys(props.routeParams).length > 0 &&
        <Button text="Back to sailing" size="small"
          onClick={() => browserHistory.push(`/`)}/>
      }
        <Inventory className="pull-right"/>
    </div>
  );
};

export default Menu;

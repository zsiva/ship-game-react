import React, { Component } from 'react';
//import Lightbox from '../Lightbox';
import Button from '../Button';

import './style.css';

export default class City extends Component {
  openModal(modal) {
    this.refs[modal].openModal();
  }
  render() {
    const { ...props } = this.props;
    return (
      <div {...props} className="container">
        <h1>
          {props.name}
        </h1>
        <Button text='Trade'/>

      </div>
    );
  }
}

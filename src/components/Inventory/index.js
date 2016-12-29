import React, { Component } from 'react';
import Lightbox from '../Lightbox';

import './style.css';

const MenuItem = (props) =>
  <div className="menu-item">
    <div className={["icon", props.icon].join(' ')} onClick={props.onClick}></div>
    <div className="pull-left">{props.quantity}</div>
  </div>

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = {coins: 0, items: 0};
  }

  openModal(modal) {
    this.refs[modal].openModal();
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div {...props} className={["inventory", className].join(' ')}>
        <MenuItem onClick={() => this.openModal('lightboxInventory')} quantity={this.state.items} icon="backpack"/>
        <MenuItem quantity={this.state.coins} icon="coins"/>

        <Lightbox ref="lightboxInventory">
          <h4>Items:</h4>
        </Lightbox>
      </div>
    );
  }
}

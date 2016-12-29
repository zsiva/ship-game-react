import React, { Component } from 'react';
import Modal from 'react-modal';
import './style.css';


const baseStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex                : '3'
  }
};

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.state, modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ ...this.state, modalIsOpen: true });
  }

  closeModal() {
    this.setState({ ...this.state, modalIsOpen: false });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={baseStyles}>
        <div className='button' onClick={this.closeModal}>X</div>

        <div className='wrapper'>{this.props.children}</div>

      </Modal>
    );
  }
}

export default Lightbox;

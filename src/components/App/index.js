import React, { Component } from 'react';
import './style.css';

const City = (props) =>
  <div onClick={props.onClick}>
    <div className="circle" />
    {props.arrow && <div><div className="line" /> <div className="circle inactive" /></div>}
  </div>;

class App extends Component {
  handleClick(){
    console.log('test');
  }
  render() {
    const { ...props } = this.props;
    return (
      <div className="App" {...props}>
        <h3>Visited Cities</h3>
        <p className="container">
          <City arrow="true" onClick={this.handleClick}/>
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Inventory from '../Inventory';

import './style.css';

const City = (props) =>
  <div className="cityWrap" onClick={props.onClick} style={{top: props.position.top, right: props.position.right}}>
    <small className="text-capitalize">{props.name}</small>
    <div className="circle" />
  </div>;

const cities = [
  {
    name: 'valencia',
    position: {
      top: '40%',
      right: '90%'
    }
  },
  {
    name: 'barcelona',
    position: {
      top: '20%',
      right: '90%'
    }
  },
  {
    name: 'athens',
    position: {
      top: '20%',
      right: '0%'
    }
  }
]
class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {position: cities[0].position};
  }
  handleClick(index){
    this.setState({...this.state, position: cities[index].position});
    setTimeout(() => {
      browserHistory.push(`/city/${cities[index].name}`);
    }, 3000);
  }
  render() {
    const { ...props } = this.props;
    return (
      <div className="App" {...props}>
        <div className="container citiesWrap">
          <h4>Travel around and get all the items!</h4>
          <div className="ship" style={this.state.position}/>
          {cities.map((city, index) =>
            <City completed="true"
                  position={city.position}
                  name={city.name}
                  onClick={this.handleClick.bind(null,index)}/>
          )}
          <Inventory style={{position: 'absolute', bottom: '10px'}}/>
        </div>
      </div>
    );
  }
}

export default App;

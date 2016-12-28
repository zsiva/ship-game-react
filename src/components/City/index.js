import React, { Component } from 'react';
import Layout from '../Layout';
import Button from '../Button';

import './style.css';

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}}
  }
  async componentDidMount(){
    const { params } = this.props;
    const cityData = await fetch(`/api/cities/${params.name}`).then(res => res.json()).then(res => res);
    this.setState({...this.state, data: cityData})
  }

  render() {
    const { params, ...props } = this.props;
    const { data } = this.state;

    return (
      <Layout {...props} className="container">
        <h1 className="text-capitalize">{params.name}</h1>

        {Object.keys(data).length > 0 &&
          <div>
            <h3>Items in this city:</h3>
            <ul>{data.items.map(item => <li>{item}</li>)}</ul>
            <Button text='Trade'/>
          </div>
        }
      </Layout>
    );
  }
}

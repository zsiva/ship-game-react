import React from 'react';
import { Router, Route } from 'react-router';

import Map from './components/Map';
import City from './components/City';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Map} />
    <Route path="/city/:name" component={City} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

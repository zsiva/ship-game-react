import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import City from './components/City';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/city/:name" component={City} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

import React from 'react';
import {Route} from 'react-router';

import Map from './components/Map';
import City from './components/City';
import NotFound from './components/NotFound';

export default (
  <div>
    <Route path="/" component={Map} />
    <Route path="/city/:name" component={City} />
    <Route path="*" component={NotFound} />
  </div>
);

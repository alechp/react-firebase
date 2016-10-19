import React from 'react';
import AppExample from '../AppExample';

import { Router, Route, hashHistory } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={AppExample} />
  </Router>
);

export default routes;
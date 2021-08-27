import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './view/Home';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact from="/" component={Home} />
    </Switch>
  );
};

export default Routes;

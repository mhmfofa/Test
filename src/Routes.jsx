import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TableSample from './components/TableSample'
import Home from './components/Home'
import NotFound from './components/NotFound'


const Routes = () => (
  <Switch>
    <Route exact path="/sample1" component={TableSample} />
    <Route exact path="/" component={Home} />
    <Route  component={NotFound} />
    
  </Switch>
);

export default Routes;

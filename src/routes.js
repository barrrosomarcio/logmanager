import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login';
import About from './pages/Sobre';
import List from './pages/List';
import Create from './pages/Create';

const Routes = () => {
  return(
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/list" component={ List } />
      <Route path="/aboutus" component={ About } />
      <Route path="/create" component={ Create } />
      <Redirect exact path="/" to="/login" />
    </Switch>
  );
}

export default Routes;
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login';
import About from './pages/Sobre';
import List from './pages/List';

const Routes = () => {
  return(
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={ Login } />
      <Route path="/list" component={ List } />
      <Route path="/aboutus" component={ About } />
    </Switch>
  );
}

export default Routes;
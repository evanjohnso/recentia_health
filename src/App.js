import React, { Component } from 'react';
import Home from './Home';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/newAccount' component={ () => <h1><Link to='/'>HomePage</Link></h1> }/>
        </Switch>
    );
  }
}

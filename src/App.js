import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'


export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/newAccount' component={ RegistrationForm }/>
        </Switch>
    );
  }
}

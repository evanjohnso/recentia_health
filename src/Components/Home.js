import React, { Component } from 'react';
import LogInForm from './LogInForm';
import { Link } from 'react-router-dom'
import Header from "./Header";
import Body from "./Body";

export default class Home extends Component {
    render() {
        return ( <div className="App">
          <Header className="App-header">
          </Header>
          <Body></Body>
          <LogInForm />
          <button><Link to='/newAccount'>Create New Account</Link></button>
          <p><a href="/">Forgot Password?</a></p>
        </div>
        )}
}

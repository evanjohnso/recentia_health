import React, { Component } from 'react';

export default class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: null,
          password: null,
          loggedIn: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logInAgain = this.logInAgain.bind(this);
      }
    
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
      handleSubmit(e) {
        e.preventDefault()
        if (this.validUserName() && this.validPassword()) {
            this.setState({
                loggedIn: !this.state.loggedIn
            });
        } else {
            alert('incorrect credentials, motherfucker')
        }
      }
      validUserName() {
        if (this.state.username === null) {
            return false;
        } else {
            return true;
        }
      }

      validPassword() {
        if (this.state.password === null) {
            return false;
        } else {
            return true;
        }
      }
      
      logInAgain() {
        this.setState({
          username: null,
          password: null,
          loggedIn: !this.state.loggedIn
        });
      }
    
      signInForm() {
        return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text"
                   placeholder="Username"
                   name="username"
                   onChange={this.handleChange}
                  ></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password"
                   placeholder="Please enter a password"
                   name="password"
                   onChange={this.handleChange}
                   ></input>
          </div>
          <button type="submit">Login</button>
        </form>
        )
      }
    
    
    
      logInOutput() {
        return (
          <div>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <button onClick={this.logInAgain}>Sign in again!</button>
          </div>
        )
      }

    render() {
        return <p>{this.state.loggedIn ? this.logInOutput() : this.signInForm()}</p>
    }
}
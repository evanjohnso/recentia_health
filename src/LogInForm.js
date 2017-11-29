import React, { Component } from 'react';

export default class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: null,
          password: null,
          loggedIn: false,
          error: ''
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
        }
      }
      validUserName() {
        let username = this.state.username;
        if (username === null) {
            this.setState({error: 'Username must not be empty!'})
            return false;
        } else {
            return true;
        }
      }

      validPassword() {
        let password = this.state.password;
        if (password === null) {
            this.setState({error: 'Password must not be empty!'})
            return false;
        } else if (password.length < 8) {
            this.setState({error: 'Password must be 8 characters or longer!'})
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
          <p className="errorMessage">{this.state.error}</p>
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
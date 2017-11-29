import React, { Component } from 'react';

export default class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
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
        this.setState({
          loggedIn: !this.state.loggedIn
        });
      }
      logInAgain() {
        this.setState({
          username: '',
          password: '',
          loggedIn: !this.state.loggedIn
        });
      }
    
      signInForm() {
        return (<form onSubmit={this.handleSubmit}>
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
        </form>)
      }
    
    
    
      anotherThing() {
        return (
          <div>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <button onClick={this.logInAgain}>Sign in again!</button>
          </div>
        )
      }

    render() {
        return <p>{this.state.loggedIn ? this.anotherThing() : this.signInForm()}</p>
    }
}
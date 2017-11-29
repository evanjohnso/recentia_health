import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInPage = this.signInPage.bind(this);
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
  signInPage() {
    this.setState({
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
               value={this.state.username}
               onChange={this.handleChange}
              ></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password"
               placeholder="Please enter a password"
               name="password"
               value={this.state.password}
               onChange={this.handleChange}
               ></input>
      </div>
      <button type="submit">Login</button>
    </form>)
  }



  anotherThing() {
    return <button onClick={this.signInPage}>Sign In Page</button>
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recentia Health</h1>
        </header>
        <h2>Welcome to Recentia Health Portal!</h2>
        <h4>Thesaurus for Medical Terms</h4>
        <h1>{this.state.username}</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo tincidunt nibh, ac vulputate eros tempus eu. Sed malesuada lobortis elit vel tincidunt. Nunc at nulla sit amet massa condimentum sagittis id vitae augue. Nullam placerat risus accumsan, aliquam augue sagittis, molestie neque. Proin a lacus tincidunt, molestie dolor a, placerat diam. Aenean dictum elit in mauris eleifend, quis feugiat arcu fermentum. Aliquam sapien nibh, ornare ut aliquam et, dictum a ligula. Etiam ac orci sodales, congue lacus eu, vulputate sapien. Nullam consectetur laoreet justo sit amet lacinia. Etiam suscipit augue et venenatis ultricies. Proin imperdiet ex vitae nisi varius suscipit eget at elit.
        </p>
        <p>{this.state.loggedIn ? this.anotherThing() : this.signInForm()}</p>
        <button>Create New Account</button>
        <p><a href="/">Forgot Password?</a></p>
      </div>
    );
  }
}

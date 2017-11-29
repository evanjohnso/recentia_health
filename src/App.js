import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recentia Health</h1>
        </header>
        <h2>Welcome to Recentia Health Portal!</h2>
        <h4>Thesaurus for Medical Terms</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo tincidunt nibh, ac vulputate eros tempus eu. Sed malesuada lobortis elit vel tincidunt. Nunc at nulla sit amet massa condimentum sagittis id vitae augue. Nullam placerat risus accumsan, aliquam augue sagittis, molestie neque. Proin a lacus tincidunt, molestie dolor a, placerat diam. Aenean dictum elit in mauris eleifend, quis feugiat arcu fermentum. Aliquam sapien nibh, ornare ut aliquam et, dictum a ligula. Etiam ac orci sodales, congue lacus eu, vulputate sapien. Nullam consectetur laoreet justo sit amet lacinia. Etiam suscipit augue et venenatis ultricies. Proin imperdiet ex vitae nisi varius suscipit eget at elit.
        </p>
        <div>
          <label>Username</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="text"></input>
        </div>
        <button type="submit">Login</button>
        <button>Create New Account</button>
        <p><a href="/">Forgot Password?</a></p>
      </div>
    );
  }
}

export default App;

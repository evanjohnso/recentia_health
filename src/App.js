import React, { Component } from 'react';


import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Button from "./components/Button";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
        <Body></Body>

        <div>
          <label>Username</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="text"></input>
        </div>
        <button type="submit">Login</button>
        <Button></Button>
        <p><a href="/">Forgot Password?</a></p>
      </div>
    );
  }
}

export default App;

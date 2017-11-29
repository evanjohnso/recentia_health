import React, { Component } from 'react';
import LogInForm from './LogInForm';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return ( <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recentia Health</h1>
          </header>
          <h2>Welcome to Recentia Health Portal!</h2>
          <h4>Thesaurus for Medical Terms</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo tincidunt nibh, ac vulputate eros tempus eu. Sed malesuada lobortis elit vel tincidunt. Nunc at nulla sit amet massa condimentum sagittis id vitae augue. Nullam placerat risus accumsan, aliquam augue sagittis, molestie neque. Proin a lacus tincidunt, molestie dolor a, placerat diam. Aenean dictum elit in mauris eleifend, quis feugiat arcu fermentum. Aliquam sapien nibh, ornare ut aliquam et, dictum a ligula. Etiam ac orci sodales, congue lacus eu, vulputate sapien. Nullam consectetur laoreet justo sit amet lacinia. Etiam suscipit augue et venenatis ultricies. Proin imperdiet ex vitae nisi varius suscipit eget at elit.
          </p>
          <LogInForm />
          <button><Link to='/newAccount'>Create New Account</Link></button>
          <p><a href="/">Forgot Password?</a></p>
        </div>
        )}
}
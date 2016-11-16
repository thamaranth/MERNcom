import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router"


class App extends Component {
  render() {
    const { main, sidebar } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reality</h2>
          <h3>You are now entering the game</h3>
            You have started <Link to="/CharacterSelect"> <code>the.future</code> </Link> and reloaded
              {this.props.children}
            </div>
          </div>
        );
        }
}

export default App;

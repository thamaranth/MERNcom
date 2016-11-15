import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Reality</h2>
              <h3>You are now entering the game</h3>
                </div>
                <div>
              </div>
            <p className="App-intro">
          You have started <Link to="MissionPage"> <code>the.future</code> </Link> and reloaded
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;

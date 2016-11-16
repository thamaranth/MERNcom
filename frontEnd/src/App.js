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
        </div>
        <div>
          <div className="App-intro">
            You have started <Link to="/CharacterSelect"> <code>the.future</code> </Link> and reloaded
            <div className='container'>
              {this.props.children}
              <div className='main'>
                {main}
              </div>
              <div className='sidebar'>
                {sidebar}
              </div>
            </div>
          </div>
        </div>
      </div>
        );
        }
}

export default App;

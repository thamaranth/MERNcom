import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link } from "react-router"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fullscreen-bg">
        <div className="App-header">
          <Link to="/">
          <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-grunge-clipart-icons-signs/092839-green-grunge-clipart-icon-signs-warning-biohazard.png" className="App-logo" alt="logo" />
        </Link>
          <h2>Welcome to Reality</h2>
          <h3>You are now entering the game</h3>
            You have started <Link to="/CharacterSelect"> <code>the.future</code> </Link> and reloaded
            <div className="wrapper">
              {this.props.children}
            </div>
            </div>
          </div>
        </div>
        );
        }
}

export default App

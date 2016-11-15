import React, { Component } from 'react'
import App from './App'
export default class MissionPage extends Component {

  render(){
    return (
      <div>
      {App}
      <h1> You deserve the world </h1>
        {this.props.children}
      </div>
    )}
  }

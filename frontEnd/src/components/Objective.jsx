import React, { Component } from 'react'

export default class Objective extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      isComplete: this.props.isComplete || false,
      description: this.props.description,
      damage: this.props.damage,
      id: this.props.id,
      status: 'objective'
    }
  }

  clickHandler() {

    if ( this.state.status === 'objective' ){
      this.setState({ status: 'objective-complete', isComplete: true })
    } else {
      this.setState({ status: 'objective', isComplete: false })
    }

  }

  render() {
    return (
      <div className={this.state.status} onClick={this.clickHandler.bind(this)} id={this.state.id}>

        <h5>{this.state.description}</h5>
        <h5>{this.state.damage}</h5>
      </div>
    )
  }
}

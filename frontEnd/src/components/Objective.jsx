import React, { Component } from 'react'
import Boss from './Boss'

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
    this.clickHandler= this.clickHandler.bind(this)
  }

  damageHandler() {

    if ( this.state.isComplete === false ){
      return 'boss-container'
    } else {
      return 'damage'
    }
  }

  clickHandler() {

    if ( this.state.status === 'objective' ){
      this.setState({ status: 'objective-complete objective', isComplete: true })
      this.props.finishObjective()
    } else {
      this.setState({ status: 'objective', isComplete: false })
    }

  }

  componentWilUnmount() {

  }

  render() {
    return (
      <div className="objective-block">
      <div className={this.state.status} onClick={this.clickHandler} id={this.state.id}>
        <strong>{this.state.description}</strong>
        <strong>{this.state.damage}</strong>
      </div>
      {/* <div className={this.damageHandler()}>
        <Boss />
      </div> */}
    </div>
    )
  }
}

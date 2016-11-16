import React, { Component } from 'react'

export default class Boss extends Component {
  constructor( props ) {
    super( props )
    this.state= {
      hp: 10,
      alive: this.props.alive || true

    }
  }

  render() {
    return (
      <div className='boss'>
        <h5>boss</h5>
      </div>
    )
  }
}

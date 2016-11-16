import React, { Component } from 'react'

export default class CompletionButton extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      objective_id: this.props.objective_id,
      
    }
  }

  componentDidMount() {
    console.log(this.state.objective_id)
  }

  clickHandler() {
    this.setState({ active: true })
    document.getElementById(this.state.objective_id).className += ' objective-complete'

  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}> Done </button>
      </div>
      )
  }
}

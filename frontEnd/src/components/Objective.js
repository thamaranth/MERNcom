import React, { Component } from 'react'

export default class Objective extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      isComplete: false,
      description: '',
      damage: ''
    }
  }

  componentDidMount() {
    console.log('mounting...')

    const fetchIsHappenning = {
    method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }
    console.log('fetching....')
    fetch( `http://localhost:4001/campaign`, fetchIsHappenning )
      .then( data => data.json() )
      .then( data => {
          const campaign = data.data[0]
          const objective = campaign.missions[0].objectives[0]
          this.setState({ description: objective.description })
          this.setState({ damage: objective.damage })

          console.log(this.state.description)
          console.log(this.state.damage)



      })
      console.log('done fetching')
  }

  render() {
    return (
      <div className='objective'>
        <h5>{this.state.description}</h5>
        <h5>{this.state.damage}</h5>
      </div>
    )
  }
}

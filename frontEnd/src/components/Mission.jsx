import React, { Component } from 'react'
import Objective from './Objective'
import Boss from './Boss'

export default class Mission extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: '',
      objectives: []

    }
  }

  componentDidMount() {

    console.log('Mounting Mission component...')

    const fetchIsHappenning = {
    method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }

    console.log( 'Making AJAX call to database...' )

    fetch( 'http://localhost:4001/campaign', fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const objectives = []
      const mission = data.data[0].missions[0]
      // console.log('MISSION', mission)
      this.setState({ name: mission.name })

      for( let i = 0; i < mission.objectives.length; i++) {
        const objective = <Objective description={mission.objectives[i].description} damage={mission.objectives[i].damage} isComplete={mission.objectives[i].isComplete} id={mission.objectives[i]._id} />
          objectives.push( objective )
            }
      this.setState({ objectives })
      // console.log(this.state.objectives[0].description)



      })

  }


  render() {
    const obj1 = this.state.objectives

    // const obj1_description = obj1.description
    // const obj1_damage = obj1.damage

    return (
      <div className="mission">
        <div className="objective-container">
          {obj1.map( ( objective ) => <div key={ objective._id} > {objective} </div> )}
          </div>
          {Objective}
        </div>

    )
  }

}

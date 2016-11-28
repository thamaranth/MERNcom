import React, { Component } from 'react'
import Objective from './Objective'
import Boss from './Boss'

export default class Mission extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: this.props.params.missionName,
      campaign: this.props.params.campaignName,
      character: this.props.params.charName,
      objectives: [],
      isComplete: this.props.params.isComplete || false,
      completed: 0,
      indexKey: 0
    }
    this.finishObjective= this.finishObjective.bind(this)
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

    const fetchString = `http://localhost:3001/character/${this.state.character}/${this.state.campaign}/${this.state.name}`

    fetch( fetchString, fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const objectives = []
      const mission = data.data
      let indexKey = this.state.indexKey

      for( let i = 0; i < mission.objectives.length; i++) {
        const objective = <Objective finishObjective={this.finishObjective} description={mission.objectives[i].description} damage={mission.objectives[i].damage} isComplete={mission.objectives[i].isComplete} id={indexKey} />
          objectives.push( objective )
          indexKey++
            }
      this.setState({ objectives, indexKey })
      })
  }

  finishObjective() {
    let completed = this.state.completed
    completed++
    this.setState({ completed })
  }

  addObjective( description, damage ) {
    let indexKey = this.state.indexKey
    indexKey++
    const objectives = this.state.objectives
    const objective = <Objective description={description} damage={damage}/>
    objectives.push( objective )
    this.setState({ objectives })
  }


  damageHandler() {

    if ( this.state.completed === this.state.objectives.length ){
      return 'boss-container boss-dead'
    } else if ( this.state.completed >= this.state.objectives.length / 2 ) {
      return 'boss-container boss-damage'
    } else {
      return 'boss-container'
    }
  }

  render() {
    const obj1 = this.state.objectives

    return (
      <div >
        <div className={this.damageHandler()}>
          <Boss name="Dood"/>
        </div>
        <div className="objectives container">
          {obj1.map( ( objective , index ) => <div key={ index.toString()}>{objective}</div> )}
          </div>
       </div>

    )
  }

}

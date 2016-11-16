import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Campaign extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: '',
      missions: [],
      missionNames: []
    }
  }

  componentDidMount() {

    console.log('Mounting Campaign component...')

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
      const missions = []
      const missionNames = []
      const campaign = data.data[0]
      this.setState({ name: campaign.name })

      for (let i = 0; i < campaign.missions.length; i++) {
        missions.push( campaign.missions[i] )
        missionNames.push( campaign.missions[i].name )
      }
      this.setState({ missions })
      this.setState({ missionNames })
      // console.log(this.state.missionNames)

      })
    }

  render() {
    return (
      <div className="campaign">
        <div className="campaign-title"><h3>{this.state.name}</h3></div>
        <div className="mission-list">
          <Link to="/campaign-1/mission-1">{this.state.missionNames[0]}</Link>
        </div>
      </div>
    )
  }

}

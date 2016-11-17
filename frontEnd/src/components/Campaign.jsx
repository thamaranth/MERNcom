import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Campaign extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: '',
      missionLinks: []
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

    fetch( 'http://localhost:3001/campaign', fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {

      const missionLinks = []
      const campaign = data.data[0]

      this.setState({ name: campaign.name })

      for (let i = 0; i < campaign.missions.length; i++) {
        /*TODO: make mission link dynamic*/
        const mission = <div className="link"><Link to="/character/:character/:campaign/:mission">{campaign.missions[i].name}</Link></div>
        missionLinks.push( mission )
      }
      this.setState({ missionLinks })
      // console.log(this.state.missionNames)

      })
    }

  render() {
    return (
      <div className="campaign">
        <div className="campaign-title"><h3>{this.state.name}</h3></div>
        <div className="mission-list">
          {this.state.missionLinks.map( mission => mission )}
        </div>
      </div>
    )
  }

}

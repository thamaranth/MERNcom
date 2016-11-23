import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Campaign extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: this.props.params.campaignName,
      character: this.props.params.charName,
      missionLinks: [],
      index: 0
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

    const fetchString = `http://localhost:3001/character/${this.state.character}/${this.state.name}`
    fetch( fetchString, fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {

      const missionLinks = []
      const campaign = data.data
      const missions = campaign.missions

      for (let i = 0; i < missions.length; i++) {
        const linkTo = `/${this.state.character}/campaigns/${this.state.name}/${missions[i].name}`
        const mission = <div className="link"><Link to={linkTo} key={i}>{missions[i].name}</Link></div>
        missionLinks.push( mission )
      }
      this.setState({ missionLinks })

      })
    }

  render() {
    return (
      <div className="campaign">
        <div className="campaign-title"><h3>{this.state.name}</h3></div>
        <div className="missions list">
          {this.state.missionLinks.map( mission => mission )}
        </div>
      </div>
    )
  }

}

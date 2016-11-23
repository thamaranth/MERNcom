import React, { Component } from 'react'
import {Link} from 'react-router'

export default class CampaignPage extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      characterName: this.props.params.charName,
      campaign_links: [],
      componentIndex: 0
    }
  }

  componentDidMount() {

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }

    console.log( 'Making AJAX call to database...' )

    const fetchString = `http://localhost:3001/character/${this.state.characterName}`
    fetch( fetchString, fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const character = data.data
      const campaigns = character.campaigns
      const campaign_links = []
      for ( let i = 0; i < campaigns.length; i++ ) {
        const linkTo = `/${this.state.characterName}/campaigns/${campaigns[i].name}`
        const campaignLink = <Link to={linkTo}>{campaigns[i].name}</Link>
        campaign_links.push( campaignLink )
      }
      this.setState({ campaign_links })
    })


  }

  render(){
    return (
      <div className="campaign-page">
        <div>
          <h1> You deserve the world </h1>

        <div className="link-list">
            {this.state.campaign_links.map( link => <div className='link' key={'modalPicker'+(this.state.componentIndex++)}>{link}</div> )}
          </div>
        </div>
          <div className="campign">
          {this.props.children}
        </div>
      </div>
    )}
  }

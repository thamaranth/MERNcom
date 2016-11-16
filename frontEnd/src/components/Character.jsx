import React, { Component } from 'react'
import CampaignPage from './CampaignPage'

export default class Character extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      id: '',
      name: '',
      hp: 0,
      img_url: '',
      campaigns: []
    }
  }

  componentDidMount() {

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }
    fetch( 'http://localhost:4001/character', fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const character = data.data[0]
      console.log(character)
      this.setState({ id: character._id, name: character.name, hp: character.hp, img_url: character.img_url, campaigns: character.campaigns })
      console.log("STATE:", this.state.name )
    })





  }

  render() {
    return (
      <div>
        <div className='character'>
          <div>
            <div>{this.state.name}</div>
            <div>{this.state.hp}</div>
            <img src={this.state.img_url} alt="Hi" />
          </div>
        </div>
        <div className="campaign-list">
          <CampaignPage />
        </div>
      </div>
    )
  }

}

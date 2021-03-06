import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Character extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      id: '',
      name: this.props.params.charName,
      hp: 0,
      img_url: '',
      campaigns: [],
      campaign_link: ''
    }
  }

  getClassName() {
    if ( this.state.name === 'Kate Winslet' ) {
      return 'character kate-winslet'
    }
    else if ( this.state.name === 'Macho Man Randy Savage' ) {
      return 'character macho-man-randy-savage'
    }
    else if (this.state.name === 'Bob') {
      return 'character bob'
    }
  }

  componentDidMount() {

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }
    const fetchString = `http://localhost:3001/character/${this.state.name}`
    fetch( fetchString, fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const character = data.data

      const linkString = `/${this.state.name}/campaigns`
      const campaignLink = <div className="link"><Link to={linkString}>Campaign Selection</Link></div>
      this.setState({ id: character._id, hp: character.hp, img_url: character.img_url, campaigns: character.campaigns, campaign_link: campaignLink })
    })

  }

  render() {
    return (
      <div className={ this.getClassName() }>
        <div className="list">
          {this.props.children}
        </div>
        <div className='character-stats'>
          <div>{this.state.name}</div>
          <div>HP
            <div className="character-hp">{this.state.hp}</div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="link"><a href="http://localhost:3000/CharacterSelect">CHARACTERS</a></div>
          <div className='campaign-select'>
            {this.state.campaign_link}
          </div>
        </div>
      </div>
    )
  }

}

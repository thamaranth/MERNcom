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

    // console.log("NAME: ", this.state.name)

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }
    const fetchString = `http://localhost:3001/character/${this.state.name}`
    console.log('Fetch String: ', fetchString )
    fetch( fetchString, fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const character = data.data

      const linkString = `/character/${this.state.name}/select`
      const campaignLink = <div className="link"><Link to={linkString}>Campaign Selection</Link></div>
      this.setState({ id: character._id, hp: character.hp, img_url: character.img_url, campaigns: character.campaigns, campaign_link: campaignLink })
      console.log(this.state.campaign_link)
    })

  }

  render() {
    console.log("getting class name:", this.getClassName())
    return (
      <div className={ this.getClassName() }>
        <div className="list">
          {this.props.children}
        </div>
        {this.state.campaign_link}
        <div className='character-stats'>
          <div>{this.state.name}</div>
          <div>HP
            <div className="character-hp">{this.state.hp}</div>
          </div>
        </div>
      </div>
    )
  }

}

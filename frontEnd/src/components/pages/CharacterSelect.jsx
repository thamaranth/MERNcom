import React, { Component } from 'react'
import {Link} from 'react-router'

export default class CharacterSelect extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      characterLinks: []
    }
  }

  componentDidMount() {

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }

    fetch( 'http://localhost:3001/character', fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const characterLinks = []
      console.log('CHARACTER', data.data)
      const character = data.data[0]

      // for ( let i = 0; i < character )

      const characterLink = <div className="character-link kate-winslet"><Link to="/character/Kate">{character.name}</Link></div>

      characterLinks.push( characterLink )
      this.setState({ characterLinks })
    })


  }

  render() {
    return (
      <div>
        <div className="list">
          {this.state.characterLinks.map( character => character )}
            </div>
      </div>
    )

  }

}

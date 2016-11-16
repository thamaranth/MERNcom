import React, { Component } from 'react'
import Character from '../Character'
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

    fetch( 'http://localhost:4001/character', fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const characterLinks = []
      console.log('CHARACTER', data.data[0])
      const r_character = data.data[0]

      const characterLink = <Link to="/Kate">{r_character.name}</Link>

      characterLinks.push( characterLink )
      this.setState({ characterLinks })
    })


  }

  render() {
    return (
      <div>
        <div>
          {this.state.characterLinks.map( character => character )}
            </div>
      </div>
    )

  }

}

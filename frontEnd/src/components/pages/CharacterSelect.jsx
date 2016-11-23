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

    fetch( 'http://localhost:3001/characters', fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const characterLinks = []
      const characters = data.data

      let index = 0

      characters.forEach( character => {
        const linkTo = `/${character.name}`
        let divClass = ''

        if ( character.name === 'Kate Winslet' ) {
          divClass = 'character-link kate-winslet'
        }
        else if ( character.name === 'Macho Man Randy Savage' ) {
          divClass = 'character-link macho-man-randy-savage'
        }
        else if ( character.name === 'Sean Connery' ) {
            divClass = 'character-link sean-connery'
        }
        index++
        const characterLink = <div className={divClass} key={index}><Link to={linkTo}>{character.name}</Link></div>
        characterLinks.push( characterLink )
      })
      this.setState({ characterLinks })
    })
  }

    getClassName() {

    }

  render() {
    return (
      <div>
        <div className="character-list">
          {this.state.characterLinks.map( character => character )}
            </div>
      </div>
    )

  }

}

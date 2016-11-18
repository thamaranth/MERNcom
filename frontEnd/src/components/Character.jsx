import React, { Component } from 'react'

export default class Character extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      id: '',
      name: this.props.params.charName,
      hp: 0,
      img_url: '',
      campaigns: [],
      css_class: ''
    }
  }

  getClassName() {
    if ( this.state.name === 'Kate Winslet' ) {
      return 'character kate-winslet'
    }
    else if ( this.state.name === 'Macho Man Randy Savage' ) {
      return 'character macho-man-randy-savage'
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
    fetch( fetchString, fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {

      const character = data.data[0]
      console.log('CHAR: ', character)

      // console.log("STATE:", this.state.name )

      let css_class = ''

      if ( this.state.name === 'Kate Winslet' ) {
        css_class = 'character kate-winslet'
      }
      this.setState({ id: character._id, hp: character.hp, img_url: character.img_url, campaigns: character.campaigns, css_class: css_class })
      // this.setState({ css_class })
    })

  }

  render() {
    console.log("getting class name:", this.getClassName())
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
      </div>
    )
  }

}

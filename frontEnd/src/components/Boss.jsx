import React, { Component } from 'react'

export default class Boss extends Component {
  constructor( props ) {
    super( props )
    this.state= {
      id: '',
      name: '',
      boss_name: '',
      boss_hp: 0,
      img_url: '',
      alive: this.props.alive || true

    }
  }

  componentDidMount() {

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }
    fetch( 'http://localhost:4001/campaign', fetchIsHappenning )
    .then( data => data.json() )
    .then( data => {
      const missions = data.data[0].missions
      console.log("this is the boss name", missions[0].boss_name)
      this.setState({ id: missions[0]._id, name: missions[0].name, boss_name: missions[0].boss_name, boss_hp: missions[0].boss_hp, img_url: missions[0].img_url })
      console.log("STATE:", this.state.name )
    })





  }

  render() {
    return (
    <div className='boss-container'>
      {this.props.boss_name}
      {this.props.boss_hp}
    </div>
    )
  }
}

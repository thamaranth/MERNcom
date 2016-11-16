import React, { Component } from 'react'
import App from '../App'
import {Link} from 'react-router'

export default class CampaignPage extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: '',
      characterName: ''
    }
  }

  componentDidMount() {

  }

  render(){
    return (
      <div>
        <h1> You deserve the world </h1>
        <div className='campaign-list'>
          <div className='campaign-link'>
            <Link to="/character/:character/:campaign">Campaign 1</Link>
          </div>
        </div>
      </div>
    )}
  }

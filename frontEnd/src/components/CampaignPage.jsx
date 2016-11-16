import React, { Component } from 'react'
import App from '../App'
import {Link} from 'react-router'

export default class CampaignPage extends Component {

  render(){
    return (
      <div>
        {/* {App} */}
        <h1> You deserve the world </h1>
        <div className="campaign-list">
          <h4>
            <Link to="/campaign-1">Campaign 1</Link>
          </h4>

          </div>
      </div>
    )}
  }

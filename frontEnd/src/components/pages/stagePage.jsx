import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Campaign from '../Campaign'
import Mission from '../Mission'
import CampaignPage from './CampaignPage'


export default class Stage extends Component {

    render() {
      return (

        <Router history={browserHistory}>
        <Route path="/:charName/campaigns" component={CampaignPage}>
          <Route path="/:charName/campaigns/:campaignName" component={Campaign}></Route>
          <Route path="/:charName/campaigns/:campaignName/:missionName" component={Mission}></Route>
        </Route>
      </Router>
      )
    }
}

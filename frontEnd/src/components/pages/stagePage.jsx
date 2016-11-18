import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Campaign from '../Campaign'
import Mission from '../Mission'
import Character from '../Character'
import CampaignPage from '../CampaignPage'


export default class Stage extends Component {

    render() {
      return (

        <Router history={browserHistory}>
        <Route path="/character/:charName" component={Character}>
          <IndexRoute component={CampaignPage}></IndexRoute>
          <Route path="/character/:charName/:campaignName" component={Campaign}></Route>
          <Route path="/character/:charName/:campaignName/:missionName" component={Mission}></Route>

        </Route>
      </Router>

      )
    }
}

// component={ () => (<Character />)

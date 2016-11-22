import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import CharacterSelect from './components/pages/CharacterSelect'
// import {Character, Campaign, Mission, CampaignPage} from 'components/'
import Character from './components/Character'
import Campaign from './components/Campaign'
import Mission from './components/Mission'
import CampaignPage from './components/CampaignPage'
import OpeningPage from './components/pages/OpeningPage'
import LogIn from './components/LogIn'
// import StagePage from './components/pages/StagePage'

import './index.css';


const HTMLroot = document.getElementById('root')

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={LogIn}></IndexRoute>
      <Route path="/CharacterSelect" component={CharacterSelect}></Route>
      {/* <Route path="/character/:character" component={StagePage}></Route> */}
    </Route>

    <Route path="/:charName" component={Character}>
      {/* <IndexRoute component={OpeningPage}></IndexRoute> */}
      <Route path="/:charName/select" component={CampaignPage}></Route>
      <Route path="/:charName/:campaignName" component={Campaign}></Route>
      <Route path="/:charName/:campaignName/:missionName" component={Mission}></Route>
    </Route>

  </Router>,
    HTMLroot)

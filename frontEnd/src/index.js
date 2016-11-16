import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Campaign from './components/Campaign'
import Mission from './components/Mission'
import Character from './components/Character'
import CharacterSelect from './components/pages/CharacterSelect'
import CampaignPage from './components/CampaignPage'
import Test from './components/Test'
import StagePage from './components/pages/StagePage'

import './index.css';


const HTMLroot = document.getElementById('root')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Test}></IndexRoute>
      <Route path="/KATE/CampaignPage" component={CampaignPage}></Route>
      <Route path="/campaign-1" component={Campaign}></Route>
      <Route path="/campaign-1/mission-1" component={Mission}></Route>
      <Route path="/CharacterSelect" component={CharacterSelect}></Route>
      <Route path="/character/:character" component={StagePage}></Route>
    </Route>
  </Router>,
    HTMLroot)

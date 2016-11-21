import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import CharacterSelect from './components/pages/CharacterSelect'
import LogIn from './components/LogIn'
import StagePage from './components/pages/StagePage'

import './index.css';


const HTMLroot = document.getElementById('root')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LogIn}></IndexRoute>
      {/* <Route path="/KATE/CampaignPage" component={CampaignPage}></Route> */}
      <Route path="/CharacterSelect" component={CharacterSelect}></Route>
      <Route path="/character/:character" component={StagePage}></Route>
    </Route>
  </Router>,
    HTMLroot)

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import CharacterSelect from './components/pages/CharacterSelect'
import Character from './components/Character'
import StagePage from './components/pages/StagePage'
import LogIn from './components/LogIn'

import '../public/stylesheets/index.css'
import '../public/stylesheets/characters.css'

const HTMLroot = document.getElementById('root')

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={App}>
      <IndexRoute components={LogIn}> </IndexRoute>
      <Route path="/CharacterSelect" component={CharacterSelect}></Route>
    </Route>

    <Route path="/:charName" component={Character}>
      <Route path="/:charName/campaigns" component={StagePage}></Route>
      {/* <Route path="/:charName/:campaignName" component={Campaign}></Route>
      <Route path="/:charName/:campaignName/:missionName" component={Mission}></Route> */}
    </Route>

  </Router>,
    HTMLroot)

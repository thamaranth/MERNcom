import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';

import './index.css';

import MissionPage from './components/MissionPage'
import Test from './components/Test'

const HTMLroot = document.getElementById('root')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Test}></IndexRoute>
      <Route path="/MissionPage" component={MissionPage}></Route>

    </Route>
  </Router>,
    HTMLroot
)

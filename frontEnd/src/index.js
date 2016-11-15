import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MissionPage from './MissionPage'
import Test from './Test'
const HTMLroot = document.getElementById('root')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Test}></IndexRoute>
      <Route path="MissionPage" component={MissionPage}></Route>
    </Route>
    </Router>,
    HTMLroot
)

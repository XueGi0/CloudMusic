import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import List from "./containers/List/List";
import ListDetail from "./containers/listDetail/ListDetail";
import Home from './containers/Home/Home';
import Music from './containers/Music/Music';
import Profile from "./containers/Profile/Profile";
import App from './containers/App';
import {Provider} from 'react-redux';
import store from './store';
import Player from './containers/Player/Player';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/user" component={List}/>
          <Route path="/music" component={Music}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/playList" component={ListDetail}/>
          <Route path="/player" component={Player}/>
        </Switch>
      </App>
    </Router>
  </Provider>, window.root);


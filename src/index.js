import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import List from "./containers/List/List";
import ListDetail from "./containers/listDetail/ListDetail";
import Home from './containers/Home/Home';
import Music from './containers/Music/Music';
import Profile from "./containers/Profile/Profile";
import Message from './containers/Profile/Message/Message';
import VIP from './containers/Profile/VIP/VIP';
import Shop from './containers/Profile/Shop/Shop';
import OnLine from './containers/Profile/OnLine/OnLine';
import Setting from './containers/Profile/Setting/Setting';
import Sweep from './containers/Profile/Sweep/Sweep';
import Skin from './containers/Profile/Skin/Skin';
import Timer from './containers/Profile/Timer/Timer';
import Clock from './containers/Profile/Clock/Clock';
import Regard from './containers/Profile/Regard/Regard';

import App from './containers/App';
import {Provider} from 'react-redux';
import store from './store';
import Player from './containers/Player/Player';
import MusicHistory from "./containers/MusicHistory/MusicHistory";
import MyFM from "./containers/MyFM/MyFM";
import Mycollection from "./containers/Mycollection/Mycollection";

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
          <Route path="/message" component={Message}/>
          <Route path="/vip" component={VIP}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/online" component={OnLine}/>
          <Route path="/setting" component={Setting}/>
          <Route path="/sweep" component={Sweep}/>
          <Route path="/skin" component={Skin}/>
          <Route path="/timer" component={Timer}/>
          <Route path="/clock" component={Clock}/>
          <Route path="/regard" component={Regard}/>
          <Route path="/player" component={Player}/>
          <Route path="/record" component={MusicHistory}/>
          <Route path="/dj" component={MyFM}/>
          <Route path="/collection" component={Mycollection}/>
        </Switch>
      </App>
    </Router>
  </Provider>, window.root);


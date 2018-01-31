import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from './containers/Home/Home';
import Music from './containers/Music/Music';
import Profile from "./containers/Profile/Profile";

import App from './containers/App';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </App>
        </Router>
    </Provider>, window.root);
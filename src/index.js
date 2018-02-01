import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import List from "./containers/List/List";
import ListDetail from "./containers/listDetail/ListDetail";



ReactDOM.render(<Provider store={store}>
    <Router>
            <Switch>
                <Route path="/user" component={List}/>
                <Route path="/playList" component={ListDetail}/>
            </Switch>
    </Router>
</Provider>, window.root);
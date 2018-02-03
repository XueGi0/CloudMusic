import React from 'react';
import './HomeHeader.less'
import {connect} from 'react-redux';
import a from '../../images/loading1.png';
import b from '../../images/loading2.png';
import c from '../../images/loading3.png';
import d from '../../images/loading4.png';
import {Link} from 'react-router-dom';

let items = [{src: a}, {src: b}, {src: c}, {src: d}];

export default class HomeHeader extends React.Component {

  render() {
    return <div className="HomeHeader">
      <i className="pic1"></i>
      <Link to={'/search'} className="input"><input type="text" placeholder="猜你喜欢 告白气球"/></Link>
      <Link to={'/playlist/detail'}>
        <ul className="pic2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Link>
    </div>
  }
}

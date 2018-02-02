import React from 'react';
import './HomeHeader.less'
import {connect} from 'react-redux';
import a from '../../images/loading1.png';
import b from '../../images/loading2.png';
import c from '../../images/loading3.png';
import d from '../../images/loading4.png';

export default class HomeHeader extends React.Component {


  render() {
    return <div className="HomeHeader">
      <i className="pic1"></i>
      <input type="text" placeholder="猜你喜欢 告白气球"/>
      <ul className="pic2">
        <li><img src={a} alt=""/></li>
        <li><img src={b} alt=""/></li>
        <li><img src={c} alt=""/></li>
        <li><img src={d} alt=""/></li>
      </ul>
    </div>
  }
}

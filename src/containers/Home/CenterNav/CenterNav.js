import React from 'react';
import a from './upbill.png';
import './CenterNav.less';
import {Link} from 'react-router-dom';

export default class CenterNav extends React.Component {
  render() {
    return (
      <ul className="home_center_nav">
        <li>
          <Link to={'/personal_fm'}>
            <img src={a} alt=""/>
            <p>私人FM</p>
          </Link>
        </li>
        <li>
          <Link to={'/recommend/songs'}>
            <img src={a} alt=""/>
            <p>每日推荐</p>
          </Link>
        </li>
        <li>
          <Link to={'/recommend/resource'}>
            <img src={a} alt=""/>
            <p>歌单</p>
          </Link>
        </li>
        <li>
          <Link to={'/top/list'}>
            <img src={a} alt=""/>
            <p>私人订制</p>
          </Link>
        </li>
      </ul>)
  }
}

import React from 'react';
import './Nav.less';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <ul id="nav">
        <NavLink to={'/'} exact={true} className="nav_list">音乐</NavLink>
        <NavLink to={'/video'} className="nav_list">视频</NavLink>
        <NavLink to={'/station'} className="nav_list">电台</NavLink>
      </ul>
    )
  }
}

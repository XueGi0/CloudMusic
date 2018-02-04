import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.less';


export default class Footer extends React.Component {
  render() {
    return <nav className="nav1">
      <NavLink to={'/'} exact={true}>
        <p className="icon1"></p>
        <span>发现音乐</span>
      </NavLink>
      <NavLink to={'/user'}>
        <p className="icon2"></p>
        <span>我的音乐</span>
      </NavLink>
      <NavLink to={'/profile'}>
        <p className="icon3"></p>
        <span>账号</span>
      </NavLink>
    </nav>
  }

}

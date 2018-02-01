import React from 'react';
import a from './upbill.png';
import './CenterNav.less';

export default class CenterNav extends React.Component {
  render() {
    return (
      <ul className="home_center_nav">
        <li>
          <img src={a} alt=""/>
          <p>私人订制</p>
        </li>
        <li>
          <img src={a} alt=""/>
          <p>私人订制</p>
        </li>
        <li>
          <img src={a} alt=""/>
          <p>私人订制</p>
        </li>
        <li>
          <img src={a} alt=""/>
          <p>私人订制</p>
        </li>
      </ul>)
  }
}

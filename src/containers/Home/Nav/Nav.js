import React from 'react';
import './Nav.less';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li className="active"><Link to={'/'}>音乐</Link></li>
        <li><Link to={'/video'}>视频</Link></li>
        <li><Link to={'/station'}/>电台</li>
      </ul>
    )
  }
}

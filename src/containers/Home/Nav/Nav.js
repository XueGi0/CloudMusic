import React from 'react';
import './Nav.less'

export default class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li className="active">音乐
        </li>
        <li>视频</li>
        <li>电台</li>
      </ul>
    )
  }
}

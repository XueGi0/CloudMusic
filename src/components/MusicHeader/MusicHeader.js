import React from 'react';
import './MusicHeader.less';
import {Link} from 'react-router-dom';
export default class MusicHeader extends React.Component {
  render() {
    return <div className="MusicHeader">
      <Link to={'/login'}><i className="pic1"></i></Link>
      <span>我的音乐</span>
      <Link to={'/player'}><i className="pic2"></i></Link>
    </div>
  }
}

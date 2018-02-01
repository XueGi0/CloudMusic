import React from 'react';
import './MusicHeader.less'
export default class MusicHeader extends React.Component {
  render(){
    return <div className="MusicHeader">
        <i className="pic1"></i>
        <span>我的音乐</span>
        <i className="pic2"></i>
    </div>
  }
}

import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
export default class Timer extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="timer">
        <ProfileHeader title={"定时关闭"} back={this.back} Url={Url}/>
        <div className="content">
          <a className="small-footer">计时结束后，将暂停播放歌曲</a>
          <ul className="timer-list">
            <li className="timer-item">不开启<i className="iconfont icon-duigou"/></li>
            <li className="timer-item">10分钟后<i className="iconfont icon-duigou"/></li>
            <li className="timer-item">20分钟后<i className="iconfont icon-duigou"/></li>
            <li className="timer-item">30分钟后<i className="iconfont icon-duigou"/></li>
            <li className="timer-item">60分钟后<i className="iconfont icon-duigou"/></li>
            <li className="timer-item">90分钟后<i className="iconfont icon-duigou"/></li>
            <li className="timer-item">自定义<i className="iconfont icon-duigou"/></li>
          </ul>
        </div>
      </div>
    )
  }
}

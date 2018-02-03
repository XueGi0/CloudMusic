import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';

export default class Clock extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="clock">
        <ProfileHeader title={"音乐闹钟"} back={this.back} Url={Url}/>
        <div className="content">
          <ul className="clock-box">
            <li className="clock-box-item item-title">
              <p>00:00</p>
              <em>></em>
            </li>
            <li className="clock-box-item">
              <p>铃声</p>
              <em>></em>
              <span>云音乐小秘书叫早</span>
            </li>
            <li className="clock-box-item">
              <p>重复</p>
              <em>></em>
              <span>永不</span>
            </li>
          </ul>
          <b className="clock-footer">因iOS系统限制，请注意：</b>
          <p className="clock-footer">1. iPhone通知中心未允许云音乐的通知时，将无法响铃</p>
          <p className="clock-footer">2. iPhone关机、打开手机静音开关、音量为0或处于勿扰模式时，将无法响铃</p>
          <p className="clock-footer">3. 插入耳机时，闹钟仅能在耳机中播放</p>
          <p className="clock-footer">4. 电话通话时，也将正常响铃</p>
        </div>
      </div>
    )
  }
}

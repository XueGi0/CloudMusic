import React from 'react';
import './index.less';
import Url from '../arrow-2.png';
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";

export default class Message extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="message">
        <ProfileHeader title={"我的消息"} back={this.back} Url={Url}/>
        <div className="content">
          <ul className="m-box">
            <li className="select">
              私信
            </li>
            <li>
              评论
            </li>
            <li>
              @我
            </li>
            <li>
              通知
            </li>
          </ul>
          <div>
            <span className="msg">暂无私信</span>
          </div>
        </div>
      </div>
    )
  }
}

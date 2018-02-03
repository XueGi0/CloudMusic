import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';

export default class Share extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="message">
        <ProfileHeader title={"分享"} back={this.back} Url={Url}/>
        <div className="message-content">
          分享网易云音乐
        </div>
      </div>
    )
  }
}

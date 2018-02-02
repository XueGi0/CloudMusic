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
      <div className="message">
        <ProfileHeader title={"音乐闹钟"} back={this.back} Url={Url}/>
        <div className="message-content">
        </div>
      </div>
    )
  }
}

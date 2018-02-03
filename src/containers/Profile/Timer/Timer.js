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
        </div>
      </div>
    )
  }
}

import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';

export default class OnLine extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="online">
        <ProfileHeader title={"在线听歌免流量"} back={this.back} Url={Url}/>
        <div className="content">
        </div>
      </div>
    )
  }
}

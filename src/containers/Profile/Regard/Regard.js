import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
export default class Regard extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="regard">
        <ProfileHeader title={"关于网易云音乐"} back={this.back} Url={Url}/>
        <div className="content">
          Regard
        </div>
      </div>
    )
  }
}

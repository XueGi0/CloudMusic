import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';

export default class Shop extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="message">
        <ProfileHeader title={"云音乐商城"} back={this.back} Url={Url}/>
        <div className="message-content">

        </div>
      </div>
    )
  }
}

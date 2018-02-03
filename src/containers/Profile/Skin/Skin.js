import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
export default class Skin extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="skin">
        <ProfileHeader title={"个性换肤"} back={this.back} Url={Url}/>
        <div className="content">
        </div>
      </div>
    )
  }
}

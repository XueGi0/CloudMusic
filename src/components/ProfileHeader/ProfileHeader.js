import React from 'react';
import './ProfileHeader.less'
export default class ProfileHeader extends React.Component {
    render(){
        return <div className="ProfileHeader">
          <i className="pic1"></i>
          <span>账号</span>
          <i className="pic2"></i>
        </div>
    }
}

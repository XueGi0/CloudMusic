import React from 'react';
import './ProfileHeader.less'
export default class ProfileHeader extends React.Component {
  render() {
    return <div className="ProfileHeader">
      {this.props.Url ? <img className="pic1" src={this.props.Url} alt="" onClick={this.props.back}/> : <i></i>}
      <span>{this.props.title}</span>
      <i className="pic2"></i>
    </div>
  }
}

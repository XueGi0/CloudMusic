import React from 'react';
import './ProfileHeader.less'
import {Link} from 'react-router-dom';
export default class ProfileHeader extends React.Component {
  render() {
    return <div className="ProfileHeader">
      {this.props.Url ? <img className="pic1" src={this.props.Url} alt="" onClick={this.props.back}/> : <i></i>}
      <span>{this.props.title}</span>
      <Link to={'/playlist/detail'}><i className="pic2"></i></Link>
    </div>
  }
}

import React from 'react';
import a from './arrow-2.png';
import b from './more.png';


export default class PrivateFM extends React.Component {
  render() {
    return (
      <div className="private_fm">
        <div className="header">
          <img src={a} alt=""/>
          <span><i className="icon"></i>私人FM</span>
          <span><i className="icon"></i>跑步FM</span>
          <img src={b} alt=""/>
        </div>
      </div>)
  }
}
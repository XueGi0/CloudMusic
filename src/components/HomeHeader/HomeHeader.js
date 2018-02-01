import React from 'react';
import './HomeHeader.less'
export default class HomeHeader extends React.Component {
  render(){
      return <div className="HomeHeader">
          <i className="pic1"></i>
          <input type="text" placeholder="猜你喜欢 告白气球"/>
          <i className="pic2"></i>
      </div>
  }
}

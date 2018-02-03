import React from 'react';
import './index.less'
import MHeader from "../../components/MHeader/MHeader";
import Footer from "../../components/Footer/Footer";
export default class Drive extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="drive">
        <i className="iconfont icon-jingchaliecheyuan"/>
        <p>驾驶模式是网易云音乐为您驾驶途中打造的便捷模式。为了您的安全，请遵守行驶过程中使用移动设备的法律法规。网易云音乐提醒您：请在确保交通安全的前提下，谨慎开启驾驶模式</p>
        <a className="drive-btn btn1" onClick={this.back}>拒绝</a>
        <a className="drive-btn">同意</a>
      </div>
    )
  }
}

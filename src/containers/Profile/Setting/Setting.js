import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import arrow from '../arrow-1.png';
export default class Setting extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="setting">
        <ProfileHeader title={"设置"} back={this.back} Url={Url}/>
        <div className="content">
          <ul className="setting-box">
            <li className="setting-item">
              <p>在线播放音质</p>
              <img src={arrow} alt=""/>
              <span>自动</span>
            </li>
            <li className="setting-item">
              <p>下载音质</p>
              <img src={arrow} alt=""/>
              <span>较高</span>
            </li>
            <li className="setting-item">
              <p>边听边存</p>
              <img src={arrow} alt=""/>
              <span>未开启</span>
            </li>
          </ul>
          <ul className="setting-box">
            <li className="setting-item">
              <p>使用2G/3G/4G网络播放</p>
            </li>
            <li className="setting-item">
              <p>使用2G/3G/4G网络下载</p>
            </li>
            <li className="setting-item">
              <p>动态页中WiFi下自动播放视频</p>
            </li>
            <li className="setting-item">
              <p>视频页中WiFi下连续播放</p>
            </li>
          </ul>
          <ul className="setting-box">
            <li className="setting-item">
              <p>均衡器</p>
              <img src={arrow} alt=""/>
              <span>已关闭</span>
            </li>
            <li className="setting-item">
              <p>经典播放界面</p>
            </li>
            <li className="setting-item">
              <p>锁屏歌词</p>
            </li>
            <li className="setting-item">
              <p>歌词翻译</p>
            </li>
          </ul>
          <p className="setting-title">外文歌词有翻译时，允许显示中文翻译</p>
          <ul className="setting-box">
            <li className="setting-item">
              <p>截屏后提示分享</p>
            </li>
          </ul>
          <ul className="setting-box">
            <li className="setting-item">
              <p>车载蓝牙播放器</p>
              <img src={arrow} alt=""/>
            </li>
          </ul>
          <ul className="setting-box">
            <li className="setting-item">
              <p>跑步FM离线包</p>
            </li>
          </ul>
          <p className="setting-title">链接Wi-Fi时，会自动缓存跑步歌曲</p>
          <ul className="setting-box">
            <li className="setting-item">
              <p>清除缓存</p>
              <img src={arrow} alt=""/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

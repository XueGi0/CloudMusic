import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import arrow from '../arrow-1.png'
export default class Regard extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="regard">
        <ProfileHeader title={"关于网易云音乐"} back={this.back} Url={Url}/>
        <div className="content">
          <div className="regard-pic">
            <img src="" alt=""/>
          </div>
          <ul className="regard-box">
            <li className="regard-box-item">
              <p>当前版本</p>
              <span>4.3.4</span>
            </li>
            <li className="regard-box-item">
              <p>新版更新</p>
              <span>无新版</span>
            </li>
          </ul>
          <ul className="regard-box">
            <li className="regard-box-item">
              <p>新手教程</p>
              <img src={arrow} alt=""/>
            </li>
            <li className="regard-box-item">
              <p>帮助与反馈</p>
              <img src={arrow} alt=""/>
            </li>
            <li className="regard-box-item">
              <p>给软件评分</p>
              <img src={arrow} alt=""/>
            </li>
          </ul>
          <a className="small-footer">使用网易云音乐网页版、电脑客户端、手机客户端，强大的多段同步，音乐随身听！请访问：music.163.com</a>
          <div className="blank"/>
          <a className="small-footer foot-color">《网易云音乐服务条款》</a>
          <a className="small-footer foot-color">《网易云音乐社区管理细则》</a>
        </div>
      </div>
    )
  }
}

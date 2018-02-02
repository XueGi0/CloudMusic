import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import a from './arrow-1.png';
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Night from './Night/Night';


export default class Personal extends React.Component {
  handle = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="content">
        <ProfileHeader title={"账号"} Url={''}/>
        <div className="m-head">
          <p className="m-title">登陆网易云音乐</p>
          <p className="m-title">手机电脑多端同步，320k高音质无限下载</p>
          <button className="m-login">立即登陆</button>
        </div>
        <ul className="list">
          <Link to={"/message"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">我的消息</span>
            <img src={a} alt=""/>
          </Link>
        </ul>
        <ul className="list">
          <Link to={"/vip"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">VIP会员</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/shop"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">商城</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/online"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">在线听歌免流量</span>
            <img src={a} alt=""/>
          </Link>
        </ul>
        <ul className="list">
          <Link to={"/setting"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">设置</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/sweep"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">扫一扫</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/skin"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">个性换肤</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/night"} onClick={
            (e) => {
              this.handle(e)
            }
          } className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">夜间模式</span>
            <Night/>
          </Link>
          <Link to={"/timer"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">定时关闭</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/clock"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">音乐闹钟</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/drive"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">驾驶模式</span>
            <img src={a} alt=""/>
          </Link>
        </ul>
        <ul className="list">
          <Link to={"/share"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">分享网易云音乐</span>
            <img src={a} alt=""/>
          </Link>
          <Link to={"/regard"} className="list-item">
            <i className="list_icon"/>
            <span className="m-msa">关于</span>
            <img src={a} alt=""/>
          </Link>
        </ul>
      </div>
    )
  }
}

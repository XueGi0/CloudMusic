import React from 'react';
import './index.less';
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';
import d from './4.jpg';
import e from './5.jpg';
import f from './6.jpg';
import g from './7.jpg';

export default class VIP extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="vip">
        <ProfileHeader title={"VIP会员"} back={this.back} Url={Url}/>
        <div className="content">
          <div className="scr">
            <i className="icon"/>
            <p>您的账号存在安全风险，请尽快登陆！</p>
            <em className="icon_arrow"/>
          </div>
          <div className="vip-header">
            <p className="vip-title"><i/>当前未开通</p>
            <a>立即开通</a>
          </div>
          <div className="vip-select">
            <ul className="vip-box">
              <li className="active"><i/>豪华会员(SVIP)</li>
              <li>普通会员(VIP)</li>
            </ul>
            <ul className="super-vip">
              <li><img src={a} alt=""/></li>
              <li><img src={b} alt=""/></li>
              <li><img src={c} alt=""/></li>
              <li><img src={d} alt=""/></li>
              <li><img src={e} alt=""/></li>
              <li><img src={f} alt=""/></li>
              <li><img src={g} alt=""/></li>
            </ul>
          </div>
          <ul className="vip-buy">
            <li className="vip-buy-item">
              <i className="iconfont icon-lihe"/>
              <p>给好友购买</p>
              <em>></em>
            </li>
            <li className="vip-buy-item">
              <i className="iconfont icon-duihuanyouhuiquan"/>
              <p>使用兑换码</p>
              <em>></em>
            </li>
            <li className="vip-buy-item">
              <i className="iconfont icon-shoutidai"/>
              <p>我购买的单曲</p>
              <em>></em>
            </li>
          </ul>
          <ul className="vip-bank">
            <li className="vip-bank-item">
              <i className="iconfont icon-zhongxinyinxing"/>
              <p>中信云音乐免年费白金卡<span>3个月豪华会员+耳机卷</span></p>
              <em>></em>
            </li>
            <li className="vip-bank-item">
              <i className="iconfont icon-zhaoshangyinhang-"/>
              <p>办招行联名卡拿AKG耳机<span>开卡送14天云音乐会员</span></p>
              <em>></em>
            </li>
          </ul>
          <a className="small-footer">
            付费会员服务协议
          </a>
          <a className="small-footer">
            帮助和反馈
          </a>
        </div>
      </div>
    )
  }
}

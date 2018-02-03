import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import arrow from '../arrow-1.png'

export default class OnLine extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="online">
        <ProfileHeader title={"在线听歌免流量"} back={this.back} Url={Url}/>
        <div className="content">
          <div className="online-pic">
            <img src="" alt=""/>
          </div>
          <span className="online-span">网易免流卡</span>
          <div className="online-phone">
            <i className="iconfont icon-simqia"/>
            <p>
              网易白金卡
              <b>网易/爱奇艺/百度免流玩，赠50花费</b>
            </p>
          </div>
          <span className="online-span">免流畅听包</span>
          <div className="online-phone">
            <i className="iconfont icon-liantonglogo"/>
            <p>
              畅听流量包
              <b>￥9/月 新用户送三天</b>
            </p>
            <img src={arrow} alt=""/>
          </div>
          <div className="online-phone">
            <i className="iconfont icon-changyonglogo38"/>
            <p>
              新用户畅听包
              <b>￥10/月 免费体验一个月</b>
            </p>
            <img src={arrow} alt=""/>
          </div>
          <a className="small-footer">我已开通流量包，立即激活></a>
        </div>
      </div>
    )
  }
}

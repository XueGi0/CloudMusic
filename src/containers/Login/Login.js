import React from 'react';
import './index.less'
import {Link} from "react-router-dom";
import a from '../../images/tubiao.png';
export default class Login extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="login">
        <div className="login-title">
          <i onClick={this.back} className="close"></i>
          登录
        </div>
        <img src={a} alt="" className="tubiao"/>
        <div className="login-btn-box">
          <Link to={"/phone"} className="login-btn">手机号登陆</Link>
          <Link to={"/register"} className="login-btn">注册</Link>
        </div>
        <div className="login-footer">
          <span>其他登陆方式</span>
          <ul className="icon-box">
            <li><i className="icon-weixin"/>微信</li>
            <li><i className="icon-qq"/>QQ</li>
            <li><i className="icon-weibo"/>微博</li>
            <li><i className="icon-email"/>网易邮箱</li>
          </ul>
        </div>
      </div>
    )
  }
}

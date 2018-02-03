import React from 'react';
import './index.less'
import {connect} from "react-redux";
import actions from "../../store/actions";
import {Link, withRouter} from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Url from '../Profile/arrow-2.png';
class Phone extends React.Component {
  constructor() {
    super();
    this.state = {
      login_tipAry: [
        "请输入用户名~~",
        "手机号码格式不正确~~",
        "请输入密码~~",
        "用户名或者密码不正确~~"
      ]
    }
  }

  back = () => {
    this.props.history.goBack();
  };
  handleClick = () => {
    let reg = /^1\d{10}$/;
    let $box = this.dialogBox;
    let $user = this.userna;
    let $psw = this.psw;
    let $phoneTips = this.loginTips;
    if ($user.value === "") {
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.login_tipAry[0];//手机未输入提示错误信息
      $user.style.border = "1px solid #f56700";
      return;
    }
    if (!reg.test($user.value)) {//验证手机号，不匹配出现相应提示
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.login_tipAry[1];
      return;
    }
    if ($user.value !== "" && $psw.value === "") {//手机号已经输入但是密码未输入
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.login_tipAry[2];
      $psw.style.border = "1px solid #f56700";
      return;
    }
    this.props.toLoginAPI(this.userna.value, this.psw.value, this.props.history);
  };

  //用户名一旦输入相应提示信息消失
  handleInputUser = (e) => {
    let $box = this.dialogBox;
    let val = e.target.value;

    if (val !== "") {
      $box.style.display = "none";
    }
  };

  //获取焦点后显示边框
  handleFocusBorder = (e) => {
    let $username = this.userna;
    let $psw = this.psw;
    if (e.target.type === "text") {
      $username.style.border = "1px solid #f56700";
      return;
    }

    if (e.target.type === "password") {
      $psw.style.border = "1px solid #f56700";
      return;
    }
  };

  //失去焦点后隐藏边框
  handleBlurBorder = (e) => {
    let $username = this.userna;
    let $psw = this.psw;
    if (e.target.type === "text") {
      $username.style.border = "none";
    }

    if (e.target.type === "password") {
      $psw.style.border = "none";
    }
  };

  //密码一旦输入相应提示消失
  handlePsw = (e) => {
    let $box = this.dialogBox;
    let val = e.target.value;
    if (val !== "") {
      $box.style.display = "none";
    }
  };
  //
  // //改变密码的显示状态
  // handleChangeEyeColor = () => {
  //     let $eye = this.eye;
  //     let $psw = this.psw;
  //     if ($psw.type === "password") {
  //         $eye.style.color = "#33b4ff";
  //         $psw.type = "text";
  //     } else {
  //         $eye.style.color="#333";
  //         $psw.type = "password";
  //     }
  // };

  render() {
    return (
      <div className="phone">
        <ProfileHeader title={'手机号登录'} Url={Url} back={this.back}/>
        <div className="phone_content">
          <div className="phone-input-box">
            <i className="iconfont icon-shouji"/>
            <input type="text" placeholder="手机号" ref={x => this.userna = x} onKeyUp={this.handleInputUser}
                   onFocus={this.handleFocusBorder} onBlur={this.handleBlurBorder}/>
          </div>

          <div className="phone-input-box">
            <i className="iconfont icon-suo"/>
            <input type="password" placeholder="密码" ref={x => this.psw = x} onKeyUp={this.handlePsw}
                   onFocus={this.handleFocusBorder} onBlur={this.handleBlurBorder}/>
          </div>
          <div className="login-dialog" ref={x => this.dialogBox = x}>
            <div className="login-logo">!</div>
            <p className="login-tit" ref={x => this.loginTips = x}></p>
          </div>
          <a className="phone-btn" onClick={this.handleClick}>登陆</a>
          <Link to={"/reset"} className="phone-reset">重设密码</Link>
        </div>

      </div>
    )
  }
}
export default withRouter(connect(state => ({...state.session}), actions)(Phone));

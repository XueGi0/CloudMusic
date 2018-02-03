import React from 'react';
import './index.less'
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import actions from "../../store/actions";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Url from '../Profile/arrow-2.png';


class Register extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  constructor() {
    super();
    this.state = {
      tipsAry: [
        "请输入手机号码",
        "手机号码格式不正确",
        "请输入短信验证码",
        "短信验证码不正确"
      ]
    }
  }


  //检查手机号和验证码的状态
  handleClick = () => {
    let reg = /^1\d{10}$/;
    let $box = this.box;
    let $phoneNum = this.mobile.value;
    let $checkNum = this.checkNum.value;
    let $phoneTips = this.tips;

    if ($phoneNum === "") {
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[0];//手机未输入提示错误信息
      return;
    }

    if (!reg.test($phoneNum)) {//验证手机号，不匹配出现相应提示
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[1];
      return;
    }

    if ($phoneNum === "" && $checkNum !== "") {
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[0];
      return;
    }

    if ($phoneNum !== "" && $checkNum === "") {//手机号已经输入但是验证码未输入
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[2];
      return;
    }

    this.getRegister();//手机号验证码输入后跳转到个人中心
  };

  //获取API中手机号和验证码登录后显示随机生成的用户名
  getRegister = () => {
    let checkNodeNum = this.props.getNumberAPI();
    this.registerUser = checkNodeNum.user;
    if (this.registerUser) {
      this.props.history.push("/login");
    }
  }

  //手机号码一旦输入相应提示信息消失
  handleInputPhoneNum = (e) => {
    let $box = this.box;
    let val = e.target.value;

    if (val !== "") {
      $box.style.display = "none";
    }
  };

  //获取API中的验证码的接口
  getCodeFn = () => {
    let checkNode = this.props.getNumberAPI();
    setTimeout(() => {
      this.checkNum.value = checkNode.mobileCode;
    }, 3000);
  }

  //点击获取验证码，并且进入倒计时读秒状态
  getCheckNum = () => {
    let reg = /^1\d{10}$/;
    let $phoneNum = this.mobile.value;
    let $checkNum = this.checkNum.value;
    let $box = this.box;
    let $phoneTips = this.tips;

    if ($phoneNum === "" && $checkNum !== "") {//手机号未输入但验证码已输入
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[0];
      return;
    }

    if ($phoneNum === "") {//手机号未输入但验证码已输入
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[0];
      return;
    }

    if (!reg.test($phoneNum)) {
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[1];
      return;
    }

    let $sendBtn = this.sendBtn;
    this.timerBack();
    if ($sendBtn.innerHTML === "重新发送") {
      this.timerBack();
    }

    //执行获取验证码
    this.props.getNumberAPI();
    setTimeout(() => {
      this.str = this.props.number.img;
      this.captcha.innerHTML = this.str.replace(/\\/g, '');
    }, 3000);
  };
  //实现倒计时
  timerBack = () => {
    let $sendBtn = this.sendBtn;
    let time = 10;
    clearInterval(this.sendTimer);
    this.sendTimer = setInterval(() => {
      time = time - 1;
      $sendBtn.setAttribute("disabled", true);//不可点击
      $sendBtn.style.color = "#ccc";
      $sendBtn.innerHTML = `重新发送(${time})`;
      if (time == 0) {
        clearInterval(this.sendTimer);
        $sendBtn.removeAttribute("disabled");//可点击
        $sendBtn.style.color = "#003ab5";
        $sendBtn.innerHTML = `重新发送`;
      }
    }, 1000);
  };

  //验证码一旦输入相应提示消失
  handleCheckNum = (e) => {
    let $box = this.box;
    let val = e.target.value;

    if (val !== "") {
      $box.style.display = "none";
    }
  };

  render() {
    // if (this.props.number) {
    //   let img = this.props.number.img;
    //   img = JSON.parse(JSON.stringify(img));
    // }
    return (
      <div className="phone">
        <ProfileHeader title={'手机号注册'} Url={Url} back={this.back}/>
        <div className="content">
          <div className="phone-input-box">
            <i className="iconfont icon-shouji"/>
            <input type="text" placeholder="输入手机号" ref={x => this.mobile = x}
                   onKeyUp={this.handleInputPhoneNum}/>
          </div>
          <div className="phone-input-box">
            <i className="iconfont icon-suo"/>
            <input type="password" placeholder="设置登陆密码，不少于6位"/>
          </div>
          <div className="pwd-panel">
            <div className="check-numBox">
              <input type="text" className="check-num" placeholder="请输入验证码" ref={x => this.checkNum = x}
                     onKeyUp={this.handleCheckNum}/>
            </div>
            <div className="captcha" ref={x => this.captcha = x}></div>
            <div className="get-num">
              <a href="javascript:;" onClick={this.getCheckNum} ref={x => this.sendBtn = x}>获取验证码</a>
            </div>
          </div>
          <div className="phone-dialog" ref={x => this.box = x}>
            <div className="dialog-logo">!</div>
            <p className="dialog-tit" ref={x => this.tips = x}></p>
          </div>
          <Link className="phone-btn" to="/Phone">下一步</Link>
        </div>
        <div className="login-footer">
          <span>其他登陆方式</span>
          <div className="icon-box">
            <i className="iconfont icon-weixin"/>
            <i className="iconfont icon-qq"/>
            <i className="iconfont icon-weibo"/>
            <i className="iconfont icon-gongsiyouxiang"/>
          </div>
          <div className="icon-title">
            <b>微信</b>
            <b>QQ</b>
            <b>微博</b>
            <b>网易邮箱</b>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(state => ({...state.session}), actions)(Register));

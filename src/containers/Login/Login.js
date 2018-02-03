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
                    <i onClick={this.back}>X</i>
                    登陆
                </div>
                <img src={a} alt="" className="tubiao"/>
                <div className="login-btn-box">
                    <Link to={"/phone"} className="login-btn">手机号登陆</Link>
                    <Link to={"/register"} className="login-btn">注册</Link>
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

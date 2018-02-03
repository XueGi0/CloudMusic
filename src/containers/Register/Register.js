import React from 'react';
import './index.less'
import MHeader from "../../components/MHeader/MHeader";
import Footer from "../../components/Footer/Footer";
export default class Register extends React.Component {
    back = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="phone">
                <MHeader>
                    <i className="iconfont icon-fanhui" onClick={this.back}/>
                    手机号注册
                </MHeader>
                <div className="content">
                    <div className="phone-input-box">
                        <i className="iconfont icon-shouji"/>
                        <input type="text" placeholder="输入手机号"/>
                    </div>
                    <div className="phone-input-box">
                        <i className="iconfont icon-suo"/>
                        <input type="password" placeholder="设置登陆密码，不少于6位"/>
                    </div>
                    <a className="phone-btn">下一步</a>
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

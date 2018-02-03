import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import MHeader from "../../components/MHeader/MHeader";
import Footer from "../../components/Footer/Footer";
export default class Reset extends React.Component {
    back = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="phone">
                <MHeader>
                    <i className="iconfont icon-fanhui" onClick={this.back}/>
                    重设密码
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
                    <Link className="phone-btn" to={'/Phone'}>下一步</Link>
                </div>
            </div>
        )
    }
}

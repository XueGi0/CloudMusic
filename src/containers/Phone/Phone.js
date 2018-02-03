import React from 'react';
import './index.less'
import MHeader from "../../components/MHeader/MHeader";
import {Link} from "react-router-dom";
export default class Phone extends React.Component {
    back = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="phone">
                <MHeader>
                    <i className="iconfont icon-fanhui" onClick={this.back}/>
                    手机号登陆
                </MHeader>
                <div className="content">
                    <div className="phone-input-box">
                        <i className="iconfont icon-shouji"/>
                        <input type="text" placeholder="手机号" ref={x=>this.username=x}/>
                    </div>
                    <div className="phone-input-box">
                        <i className="iconfont icon-suo"/>
                        <input type="password" placeholder="密码" ref={x=>this.password=x}/>
                    </div>
                    <a className="phone-btn" onClick={()=>{
                        // this.props.toLoginAPI(this.username.value,this.password.value,this.props.history)
                    }}>登陆</a>
                    <Link to={"/reset"} className="phone-reset">重设密码</Link>
                </div>
            </div>
        )
    }
}

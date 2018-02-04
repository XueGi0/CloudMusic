import React from 'react';
import './index.less'
import Url from '../arrow-2.png';
import a from '../arrow-1.png';
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";

export default class MyData extends React.Component {
    back = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="mydata">
                <ProfileHeader title={'个人资料'} back={this.back} Url={Url}/>
                <div className="content">
                    <p className="data-scr">上传头像并完善个人信息，即可获得积分</p>
                    <ul className="data-box data-header-box">
                        <li className="data-item">
                            <p>头像</p>
                            <img src={a} alt=""/>
                            <span>头像</span>
                        </li>
                        <li className="data-item">
                            <p>个人主页背景</p>
                            <img src={a} alt=""/>
                            <span>背景</span>
                        </li>
                        <li className="data-item">
                            <p>昵称</p>
                            <img src={a} alt=""/>
                            <span>翟硕</span>
                        </li>
                        <li className="data-item">
                            <p>性别</p>
                            <img src={a} alt=""/>
                            <span>男</span>
                        </li>
                        <li className="data-item">
                            <p>二维码</p>
                            <img src={a} alt=""/>
                            <span><i/></span>
                        </li>
                    </ul>
                    <ul className="data-box">
                        <li className="data-item">
                            <p>生日</p>
                            <img src={a} alt=""/>
                            <span>输入生日信息</span>
                        </li>
                        <li className="data-item">
                            <p>地区</p>
                            <img src={a} alt=""/>
                            <span>北京</span>
                        </li>
                        <li className="data-item">
                            <p>大学</p>
                            <img src={a} alt=""/>
                            <span>未填写</span>
                        </li>
                    </ul>
                    <p className="data-title">此三项可以在“消息和隐私设置”中设为隐私</p>
                    <ul className="data-box">
                        <li className="data-item">
                            <p>介绍</p>
                        </li>
                        <li className="data-item data-item-input">
                            <input type="text" placeholder="个人介绍..."/>
                        </li>
                    </ul>
                    <ul className="data-box">
                        <li className="data-item">
                            <p>账号和绑定设置</p>
                            <img src={a} alt=""/>
                        </li>
                        <li className="data-item">
                            <p>个人主页展示设置</p>
                            <img src={a} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
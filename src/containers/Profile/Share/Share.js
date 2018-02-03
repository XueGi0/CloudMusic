import React from 'react';
import './index.less'
import MHeader from "../../components/MHeader/MHeader";
import Footer from "../../components/Footer/Footer";
export default class Share extends React.Component {
    back = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="message">
                <MHeader>
                    <i className="iconfont icon-fanhui" onClick={this.back}/>
                    定时关闭
                </MHeader>
                <div className="message-content">
                    Share
                </div>
                <Footer/>
            </div>
        )
    }
}

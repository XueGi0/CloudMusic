import React from 'react';
import './listDetail.less';
import a from '../../images/nav_top.png'
export default class ListDetail extends React.Component{
    render(){
        return <div>
            <div className="detailTop">
                <div className="top-top">
                    <img src={a} alt=""/>
                    <p>
                        歌单名字<br/>
                        <span><i></i>名字<a href="javascript:;"></a></span>
                    </p>
                </div>
                <ul className="top-bottom">
                    <li>
                        <i className="shoucang"></i>
                        <span>收藏</span>
                    </li>
                    <li>
                        <i className="pinglun"></i>
                        <span>评论</span>
                    </li>
                    <li>
                        <i className="fenxiang"></i>
                        <span>分享</span>
                    </li>
                    <li>
                        <i className="xiazai"></i>
                        <span>下载</span>
                    </li>
                </ul>
            </div>
            <div className="detailBottom">
                <ul className="bottom-top">
                    <li className="bot-top-left">
                        <i></i>
                        <p>
                            <span>播放全部</span>
                            (共首)
                        </p>
                    </li>
                    <li className="bot-top-right">
                        <i className="iconfont"></i>
                        <span>多选</span>
                    </li>
                </ul>
                <ul className="bottom-bottom">
                    <li>
                        <span>1</span>

                        <p>
                            <strong>莉莉安</strong><br/>
                            <span>照照-一树花开</span>
                            <i className="iconfont"></i>
                            <em className="iconfont"></em>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    }
}

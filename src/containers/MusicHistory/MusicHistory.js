import React from 'react';
import './MusicHistory.less';
import {Link} from 'react-router-dom';
import a from '../../images/srch_icn_clock.png'
import {connect} from 'react-redux';
import actions from '../../store/actions'
export default class MusicHistory extends React.Component{
    render(){
        return <div className="bigBox">
            <div className="music-header">
                <Link to={'/user'} className="pic1"></Link>
                <span>歌单</span>
                <i className="pic2"></i>
            </div>
            <div className="list-top">
                <div className="imgBox">
                    <img src={a} alt=""/>
                </div>
                <span>最近播放的歌曲</span>
                <p>
                    26
                    <span className="musicdetail"></span>
                </p>
            </div>
            <div className="list-bottom">
                <span className="bottom-top">
                    最近播放的歌曲/专辑/电台
                </span>
                <ul className="musicList">
                            <li className="listItem">
                                <Link to={{pathname: '/playList'}}>
                                    <img src="" alt=""/>
                                    <p className="textLike">
                                        <span>
                                            歌单名
                                        </span>
                                        <i>by名字</i>
                                        <em>时间</em>
                                    </p>
                                </Link>
                            </li>
                </ul>
            </div>
        </div>
    }
}

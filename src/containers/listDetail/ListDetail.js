import React from 'react';
import './listDetail.less';
import a from '../../images/nav_top.png'
import {connect} from 'react-redux';
import actions from '../../store/actions/index'
import MusicHeader from "../../components/MusicHeader/MusicHeader";
class ListDetail extends React.Component{
    componentWillMount() {
        let id=this.props.location.initid;
        this.props.getListDetailAPI(id);
        console.log(id);
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        // console.log(this.props.listDetail);
        return <div>
            <div className="detailTop">
                <div className="top-top">
                    <img src={this.props.listDetail?this.props.listDetail.result?this.props.listDetail.result.creator.avatarUrl:null:null} alt=""/>
                    <p>
                        小可爱
                        <br/>
                        <span><i></i>{this.props.listDetail?this.props.listDetail.result?this.props.listDetail.result.creator.nickname:null:null}<a href="javascript:;"></a></span>
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
                    {this.props.listDetail?this.props.listDetail.result?this.props.listDetail.result.tracks.map((item,index)=>(
                        <li key={index}>
                            <span>{index+1}</span>

                            <p>
                                <strong>{this.props.listDetail?this.props.listDetail.result?item.name:null:null}</strong><br/>
                                <span><i></i>{this.props.listDetail?this.props.listDetail.result?item.artists[0].name:null:null}-{this.props.listDetail?this.props.listDetail.result?item.album.name:null:null}</span>
                                <i className="iconfont"></i>
                                <em className="iconfont"></em>
                            </p>
                        </li>
                    )):null:null}
                </ul>
            </div>
        </div>
    }
}
export default connect(state => ({...state.list}), actions)(ListDetail);

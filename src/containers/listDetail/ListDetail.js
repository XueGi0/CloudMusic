import React from 'react';
import './listDetail.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions'
import Url from '../Profile/arrow-2.png';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

class ListDetail extends React.Component {
  componentWillMount() {
    let id = this.props.location.initid;
    this.props.getListDetailAPI(id);
  }

  back = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.props);
    return <div className="list_detail">
      <ProfileHeader title={"歌单"} back={this.back} Url={Url}/>
      <div className="content">
        <div className="detailTop">
          <img
            src={this.props.listDetail ? this.props.listDetail.result ? this.props.listDetail.result.creator.backgroundUrl : null : null}
            alt="" className="backgroundImg"/>
          <div className="top-top">
            <img
              src={this.props.listDetail ? this.props.listDetail.result ? this.props.listDetail.result.creator.avatarUrl : null : null}
              alt=""/>
            <p>
              {this.props.listDetail ? this.props.listDetail.result ? this.props.listDetail.result.name : null : null}
              <br/>
              <span><i></i>{this.props.listDetail ? this.props.listDetail.result ? this.props.listDetail.result.creator.nickname : null : null}<a
                href="javascript:;"></a></span>
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
                (共{this.props.listDetail ? this.props.listDetail.result ? this.props.listDetail.result.tracks.length : 0 : 0}首)
              </p>
            </li>
            <li className="bot-top-right">
              <i className="iconfont"></i>
              <span>多选</span>
            </li>
          </ul>
          <ul className="bottom-bottom">
            {this.props.listDetail ? this.props.listDetail.result ? this.props.listDetail.result.tracks.map((item, index) => {
              return <Link to={{pathname: '/playlist/detail', songId: item.id}} key={index}>
                <li>
                  <span>{index + 1}</span>
                  <p>
                    <strong>{this.props.listDetail ? this.props.listDetail.result ? item.name : null : null}</strong><br/>
                    <span><i></i>{this.props.listDetail ? this.props.listDetail.result ? item.artists[0].name : null : null}-{this.props.listDetail ? this.props.listDetail.result ? item.album.name : null : null}</span>
                    <i className="iconfont"></i>
                    <em className="iconfont"></em>
                  </p>
                </li>
              </Link>
            }) : null : null}
          </ul>
        </div>
      </div>
    </div>
  }
}
export default connect(state => ({...state.list}), actions)(ListDetail);

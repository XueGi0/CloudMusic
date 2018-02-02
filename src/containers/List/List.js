import React from 'react';
import './index.less';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import actions from '../../store/actions'
import MusicHeader from "../../components/MusicHeader/MusicHeader";

class List extends React.Component {
  componentDidMount() {
    this.props.getPlayListAPI('32953014');
  }

  handleClick = () => {
    let $tip = this.tip;
    let $box = this.box;
    switch ($tip.className) {
      case "rotate":
        $tip.className = "full";
        $box.style.display = 'none';
        break;
      case "full":
        $tip.className = "rotate";
        $box.style.display = 'block';
        break;
    }
  };
  touchBegin = (e) => {
    console.log(e.changedTouches);
    console.log(e);
    let point = e.changedTouches[0];
    this.strX = point.clientX;
    this.strY = point.clientY;
    this.changeX = 0;
    this.changeY = 0;
  };
  touching = (e) => {
    let point = e.changedTouches[0];
    let changeX = point.clientX - parseFloat(this.strX),
      changeY = point.clientY - parseFloat(this.strY);
    if (Math.abs(changeX) > 10 && Math.abs(changeX) < 80) {
      this.changeX = changeX;
      this.delBox.style.right = -changeX - 80 + 'px';
    }
    if (Math.abs(changeX) > 80) {
      this.changeX = changeX;
      this.delBox.style.right = 0;
    }
  };

  render() {
    return <div className="listBigBox">
      <MusicHeader/>
      <div className="listBox">
        <ul className="listTop">
          <li className="localMusic"><Link to={{pathname: '/record', userid: '32953014'}}><i></i>本地音乐</Link></li>
          <li className="recentPlay"><Link to={{pathname: '/record', userid: '32953014'}}><i></i>最近播放</Link></li>
          <li className="myVideo"><Link to={{pathname: '/record', userid: '32953014'}}><i></i>我的电台</Link></li>
          <li className="myLove"><Link to={{pathname: '/record', userid: '32953014'}}><i></i>我的收藏</Link></li>
        </ul>
        <div className="listBottom">
                <span>
                    <i ref={x => this.tip = x} onClick={this.handleClick} className="rotate">
                    </i>我创建的歌单
                </span>
          <ul className="musicList" ref={x => this.box = x}>

            {this.props.lists && this.props.lists.playlist.length > 1 ? this.props.lists.playlist.map((item, index) => (
              <li className="listItem"
                  onTouchStart={(e) => this.touchBegin(e)}
                  onTouchMove={(e) => this.touching(e)}
                  key={index}
                  onClick={() => {
                  }}
              >
                <Link to={{pathname: '/playList', initid: item.id}}>
                  <img src={item.coverImgUrl} alt=""/>
                  <p className="textLike">{item.name}<span>{item.playCount}首</span></p>
                </Link>
                <span className="listDelete" ref={x => this.delBox = x}>删除</span>
              </li>
            )) :
              <li className="listItem">
                <Link to={'/playList'}>
                  <p className="img"></p>
                  <p className="textLike">我喜欢的音乐<span>首</span></p>
                </Link>
                <a href="javascript:;" className="aaa"></a>
              </li>
            }

          </ul>
        </div>
      </div>
    </div>
  }
}
export default connect(state => ({...state.list}), {...actions})(List);

import React from 'react';
import './index.less';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import actions from '../../store/actions'
import MusicHeader from "../../components/MusicHeader/MusicHeader";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      point: ''
    };
  }

  componentDidMount() {
    this.props.getPlayListAPI('32953014');
  }

  move = (e) => {
      if (e.target !== this.state.point) {
      for (let key in this.box.children) {
        if (this.box.children.hasOwnProperty(key)) {
          this.box.children[key].children[1].style.right = '-80px';
        }
      }
    }
  };
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
    let point = e.changedTouches[0];
    this.setState({point});
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
      e.target.childNodes[1].style.right = -changeX - 80 + 'px';
    }
    if (Math.abs(changeX) > 80) {
      this.changeX = changeX;
      e.target.childNodes[1].style.right = 0;
    }
  };
  spanDelete=(e)=>{
      e.target.parentNode.style.display='none';
  };

  render() {
    return <div className="listBigBox" onTouchStart={this.move}>
      <MusicHeader/>
      <div className="listBox">
        <ul className="listTop">
          <li className="localMusic"><i></i>本地音乐</li>
          <li className="recentPlay"><Link to={{pathname: '/record', userid: '32953014'}}><i></i>最近播放</Link></li>
          <li className="myVideo"><Link to={'/dj'}><i></i>我的电台</Link></li>
          <li className="myLove"><Link to={'/collection'}><i></i>我的收藏</Link></li>
        </ul>
        <div className="listBottom">
                <span>
                    <i ref={x => this.tip = x} onClick={this.handleClick} className="rotate">
                    </i>我创建的歌单
                </span>
          <ul className="musicList" ref={x => this.box = x}>

            {localStorage.getItem('id')&&this.props.lists && this.props.lists.playlist.length > 1 ? this.props.lists.playlist.map((item, index) => (
              <li className="listItem" id={index}
                  onTouchStart={this.touchBegin}
                  onTouchMove={this.touching}
                  key={index}
              >
                <Link to={{pathname: '/playList', initid: item.id}}>
                  <img src={item.coverImgUrl} alt=""/>
                  <p className="textLike">{item.name}<span>{item.playCount}首</span></p>
                </Link>
                <span className="listDelete" onTouchStart={this.spanDelete}>删除</span>
              </li>
            )) :
              <li className="listItem">
                <Link to={'/playList'}>
                  <p className="img"></p>
                  <p className="textLike">我喜欢的音乐<span>0首</span></p>
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

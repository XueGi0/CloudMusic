import React from 'react';
import './MusicHistory.less';
import {Link} from 'react-router-dom';
import a from '../../images/srch_icn_clock.png'
import {connect} from 'react-redux';
import actions from '../../store/actions'
class MusicHistory extends React.Component {
  componentDidMount() {
    this.props.getRecentHistoryAPI('539241835');
  }

  render() {
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
          100
          <span className="musicdetail"></span>
        </p>
      </div>
      <div className="list-bottom">
        <ul className="late_musicList">
          {this.props.historyList ? this.props.historyList.weekData.map((item, index) => (
            <li key={index} className="listItem">
              <p>
                {item.song.name}<br/>
                <span>{item.song.ar[0].name}-{item.song.al.name}<i className="sq"></i></span>
              </p>
              <span className="more"></span>
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  }
}
export default connect(state => ({...state.list}), actions)(MusicHistory);

import React from 'react';
import './MusicHistory.less';
import {Link} from 'react-router-dom';
import a from '../../images/srch_icn_clock.png'
import {connect} from 'react-redux';
import actions from '../../store/actions'
import Url from '../Profile/arrow-2.png'
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
class MusicHistory extends React.Component {
  componentDidMount() {
    this.props.getRecentHistoryAPI('539241835');
  }

  back = () => {
    this.props.history.goBack();
  };

  render() {
    return <div className="bigBox">
      <ProfileHeader title={'歌单'} Url={Url} back={this.back}/>
      <div className="content">
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
            {this.props.historyList ? this.props.historyList.weekData.map((item, index) => {
              return <Link to={{pathname: '/playlist/detail', songId: item.id}} key={index}>
                <li className="listItem">
                  <p>
                    {item.song.name}<br/>
                    <span>{item.song.ar[0].name}-{item.song.al.name}<i className="sq"></i></span>
                  </p>
                  <span className="more"></span>
                </li>
              </Link>
            }) : null}
          </ul>
        </div>
      </div>
    </div>
  }
}
export default connect(state => ({...state.list}), actions)(MusicHistory);

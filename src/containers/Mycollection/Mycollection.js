import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import a from '../../images/myC.png';
import {connect} from 'react-redux';
import actions from '../../store/actions'
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Url from '../Profile/arrow-2.png';
class Mycollection extends React.Component {
  componentWillMount() {
    this.props.getHotListAPI();
  }

  back = () => {
    this.props.history.goBack();
  };

  render() {
    return <div className="collection">
      <ProfileHeader back={this.back} Url={Url} title={'我的收藏'}/>
      <div className="content">
        <div className="top">
          <img src={a} alt=""/>
        </div>
        <div className="bottom">
          <div className="bot-top">
            热门专辑推荐
          </div>
          <ul className="list_con">
            {this.props.hotList ? this.props.hotList.playlists.map((item, index) => {
              return index < 6 ? (<li key={index}>
                <img src={item.coverImgUrl} alt=""/>
                <p>{item.name}</p>
              </li>) : null;
            }) : null}
          </ul>
        </div>
      </div>
    </div>
  }
}
export default connect(state => ({...state.list}), actions)(Mycollection);

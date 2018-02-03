import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import a from '../../images/mycollection.png';
import {connect} from 'react-redux';
import actions from '../../store/actions'
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Url from '../Profile/arrow-2.png';
class MyFM extends React.Component {
  componentWillMount() {
    this.props.getHotdjAPI();
  }

  back = () => {
    this.props.history.goBack();
  };

  render() {
    return <div className="MyFM">
      <ProfileHeader title={'我的电台'} back={this.back} Url={Url}/>
      <div className="content">
        <div className="FM_top">
          <img src={a} alt=""/>
        </div>
        <div className="FM_bottom">
          <div className="bot-top">
            最新专辑推荐
          </div>
          <ul className="FMlist_con">
            {this.props.hotDj ? this.props.hotDj.programs.map((item, index) => {
              return index < 6 ? (<li key={index}>
                <img src={item.coverUrl} alt=""/>
                <p>{item.mainSong.name}</p>
              </li>) : null;
            }) : null}
          </ul>
        </div>
      </div>
    </div>
  }
}
export default connect(state => ({...state.list}), actions)(MyFM);
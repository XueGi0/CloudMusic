import React from 'react';
import './Home.less';
import '../../style/reset.less';
import {connect} from 'react-redux';

import actions from '../../store/actions'
import MainSlider from "./MainSlider/MainSlider";
import Nav from "./Nav/Nav";
import CenterNav from "./CenterNav/CenterNav";
import HomeList from "./Common/HomeList/HomeList";
import HomeHeader from '../../components/HomeHeader/HomeHeader';

import Exclusive from "./Exclusive/Exclusive";


class Home extends React.Component {

  componentDidMount() {
    this.props.getSongListAPI();
    this.props.getExclusiveAPI();
    this.props.getNewestMvAPI();

  }

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <HomeHeader/>
        <Nav/>
        <MainSlider/>
        <CenterNav/>
        <HomeList SongLists={this.props.home.songLists}/>
        <Exclusive ExclusiveLists={this.props.home.exclusiveLists}/>
        <HomeList SongLists={this.props.home.songLists} NewestLists={this.props.home.newestLists || []}/>
      </div>
    )
  }
}

export default connect(state => {
  return {...state}
}, {...actions})(Home);
import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import a from '../../images/myC.png';
import {connect} from 'react-redux';
import actions from '../../store/actions'
class Mycollection extends React.Component{
    componentWillMount() {
        this.props.getHotListAPI();
    }
    render(){
        return <div className="bigBox">
            <div className="music-header">
                <Link to={'/user'} className="pic1"></Link>
                <span>我的收藏</span>
                <i className="pic2"></i>
            </div>
            <div className="top">
                    <img src={a} alt=""/>
            </div>
            <div className="bottom">
                <div className="bot-top">
                    热门专辑推荐
                </div>
                    <ul className="list_con">
                        {this.props.hotList ?this.props.hotList.playlists.map((item, index) => {
                            return index < 6 ? (<li key={index}>
                                <img src={item.coverImgUrl} alt=""/>
                                <p>{item.name}</p>
                            </li>) : null;
                        }) : null}
                    </ul>
            </div>
        </div>
    }
}
export default connect(state => ({...state.list}), actions)(Mycollection);

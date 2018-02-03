import React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import a from '../../images/mycollection.png';
import {connect} from 'react-redux';
import actions from '../../store/actions'
class MyFM extends React.Component{
    componentWillMount() {
        this.props.getHotdjAPI();
    }
    render(){
        return <div className="bigBox2">
            <div className="music-header">
                <Link to={'/user'} className="pic1"></Link>
                <span>我的电台</span>
                <i className="pic2"></i>
            </div>
            <div className="top">
                    <img src={a} alt=""/>
            </div>
            <div className="bottom">
                <div className="bot-top">
                    最新专辑推荐
                </div>
                <ul className="list_con">
                    {this.props.hotDj ?this.props.hotDj.programs.map((item, index) => {
                        return index < 6 ? (<li key={index}>
                            <img src={item.coverUrl} alt=""/>
                            <p>{item.mainSong.name}</p>
                        </li>) : null;
                    }) : null}
                </ul>
            </div>
        </div>
    }
}
export default connect(state => ({...state.list}), actions)(MyFM);
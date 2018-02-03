import React from 'react';
import './Search.less';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {
  render() {
    return (
      <div className="searchBox">
        <div className="searchHeader">
          <input type="text" placeholder="猜你喜欢 告白气球"/>
          <span className="search"></span>
          <Link to={'/'} className="cancel">取消</Link>
        </div>
        <div className="content">
          <p className="singer">
            <span className="icon"></span>
            歌手分类
            <i className="arrow"></i>
          </p>
          <div className="hot">
            <p className="hot_search">热门搜索</p>
            <ul className="hot_lists">
              <span>林俊杰</span>
              <span>林俊杰</span>
              <span>林俊杰</span>
              <span>林俊杰</span>
              <span>林俊杰</span>
              <span>林俊杰</span>
              <span>林俊杰</span>

            </ul>
          </div>
        </div>
      </div>)
  }
}
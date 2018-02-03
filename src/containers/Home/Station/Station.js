import React from 'react';
import HomeHeader from '../../../components/HomeHeader/HomeHeader';
import Nav from '../Nav/Nav';
import './Station.less';
import a from './classify.png';
import b from './ranking.png';
import MainSlider from "../MainSlider/MainSlider";
import c from './arrow-1.png';
import d from './jiangxun.png'

export default class Station extends React.Component {

  render() {
    return (
      <div className="station">
        <HomeHeader/>
        <Nav/>
        <MainSlider/>
        <div className="radios">
          <p className="radio_classify">
            <img src={a} alt=""/><span>电台分类</span>
          </p>
          <p className="radio_ranking"><img src={b} alt=""/><span>电台排行</span></p>
        </div>
        <div className="radioContent">
          <p className="aesthetics">付费精品
            <img src={c} alt=""/>
          </p>
          <ul>
            <li>
              <img src={d} alt=""/>
              <div><h2>蒋勋新说红楼梦</h2><p>美学大师细说大观园里的青春故事</p><p>白茫茫大地真干净</p><p>￥199/Svip:￥159</p></div>
            </li>
            <li>
              <img src={d} alt=""/>
              <div><h2>蒋勋新说红楼梦</h2><p>美学大师细说大观园里的青春故事</p><p>白茫茫大地真干净</p><p>￥199/Svip:￥159</p></div>
            </li>
            <li>
              <img src={d} alt=""/>
              <div><h2>蒋勋新说红楼梦</h2><p>美学大师细说大观园里的青春故事</p><p>白茫茫大地真干净</p><p>￥199/Svip:￥159</p></div>
            </li>
          </ul>
        </div>
        <div className="individuality ">
          <p className="aesthetics">电台个性推荐</p>
          <ul>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
          </ul>
        </div>
        <div className="individuality ">
          <p className="aesthetics">电台个性推荐</p>
          <ul>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
          </ul>
        </div>
        <div className="individuality ">
          <p className="aesthetics">电台个性推荐</p>
          <ul>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
          </ul>
        </div>
        <div className="individuality ">
          <p className="aesthetics">电台个性推荐</p>
          <ul>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
            <li><img src={d} alt=""/><p>知性女神陈一发的空灵音乐</p></li>
          </ul>
        </div>

      </div>
    )
  }
}
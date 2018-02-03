import React from 'react';
import HomeHeader from "../../../components/HomeHeader/HomeHeader";
import Footer from "../../../components/Footer/Footer";
import './Video.less'
import Nav from "../Nav/Nav";

import a from './like.png';
import b from './message.png';
import c from './more.png';
import video_1 from './1.mp4'
import video_2 from './2.mp4'
import video_3 from './3.mp4'
import video_4 from './4.mp4'
import video_5 from './5.mp4'


export default class Video extends React.Component {
  render() {
    return (
      <div className="videos">
        <HomeHeader/>
        <Nav/>
        <ul className="myVideo">
          <li className="video1">
            <video className="media1"
                   src={video_1}
                   controls="controls">videoMessage
            </video>
            <div className="videoText">
              <p>两个女生玩吃鸡，简直颠覆三观！全程高能</p>
              <ul className="videoOthers">
                <li className="videoLike"><img src={a} alt=""/><p>3172</p></li>
                <li className="videoMessage"><img src={b} alt=""/><p>435</p></li>
                <li className="videoMore"><img src={c} alt=""/></li>
              </ul>
            </div>
          </li>
          <li className="video1">
            <video className="media1"
                   src={video_2}
                   controls="controls">videoMessage
            </video>
            <div className="videoText">
              <p>迪拜首富儿子的日常，养老虎开潮店，贫穷限制想象</p>
              <ul className="videoOthers">
                <li className="videoLike"><img src={a} alt=""/><p>5132</p></li>
                <li className="videoMessage"><img src={b} alt=""/><p>921</p></li>
                <li className="videoMore"><img src={c} alt=""/></li>
              </ul>
            </div>
          </li>
          <li className="video1">
            <video className="media1"
                   src={video_3}
                   controls="controls">videoMessage
            </video>
            <div className="videoText">
              <p>舞蹈跳起！哎~我说短发短发短发姑娘~</p>
              <ul className="videoOthers">
                <li className="videoLike"><img src={a} alt=""/><p>4277</p></li>
                <li className="videoMessage"><img src={b} alt=""/><p>888</p></li>
                <li className="videoMore"><img src={c} alt=""/></li>
              </ul>
            </div>
          </li>
          <li className="video1">
            <video className="media1"
                   src={video_4}
                   controls="controls">videoMessage
            </video>
            <div className="videoText">
              <p>哈哈哈哈哈哈哈哈哈哈我要笑疯了七哥别打我！</p>
              <ul className="videoOthers">
                <li className="videoLike"><img src={a} alt=""/><p>4581</p></li>
                <li className="videoMessage"><img src={b} alt=""/><p>941</p></li>
                <li className="videoMore"><img src={c} alt=""/></li>
              </ul>
            </div>
          </li>
          <li className="video1">
            <video className="media1"
                   src={video_5}
                   controls="controls">videoMessage
            </video>
            <div className="videoText">
              <p>不幸的狐狸患上狂犬病，人们观察到它病发时的状态！</p>
              <ul className="videoOthers">
                <li className="videoLike"><img src={a} alt=""/><p>1542</p></li>
                <li className="videoMessage"><img src={b} alt=""/><p>123</p></li>
                <li className="videoMore"><img src={c} alt=""/></li>
              </ul>
            </div>
          </li>
        </ul>
        <Footer/>
      </div>
    )
  }
}
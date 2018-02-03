import React from 'react';
import HomeHeader from "../../../components/HomeHeader/HomeHeader";
import Footer from "../../../components/Footer/Footer";
import './Video.less'
import Nav from "../Nav/Nav";

import a from './like.png';
import b from './message.png';
import c from './more.png';


export default class Video extends React.Component {
  render() {
    return (
      <div className="videos">
        <HomeHeader/>
        <Nav/>
        <ul className="myVideo">
          <li className="video1">
            <video className="media1"
                   src="http://vodkgeyttp8.vod.126.net/cloudmusic/c7cab2c5cd300be3d18b269b20e851d5.mp4?wsSecret=77461bc5c5f970c6216fbea9922f0386&wsTime=1517566515"
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
                   src="http://vodkgeyttp8c.vod.126.net/cloudmusic/888390d41aa0444a1a714320c090c109.mp4?wsSecret=5c9b0d72fb64c36b4d36312c27d278ae&wsTime=1517569020"
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
                   src="http://vodkgeyttp8.vod.126.net/cloudmusic/e1bdaf8cf8c73a376de85a7502761d8b.mp4?wsSecret=3b387e0ddae560ab02e0e82d2490672a&wsTime=1517569233"
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
                   src="http://vodkgeyttp8.vod.126.net/cloudmusic/536f69ab521ba46b2159a575745353f7.mp4?wsSecret=a54cf2164d2cea7b388b129f92c9bd20&wsTime=1517569979"
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
                   src="http://vodkgeyttp8.vod.126.net/vodkgeyttp8/2YSxIie0_73115474_hd.mp4?wsSecret=23384e93967403bec3884e225a092d90&wsTime=1517569729"
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
import React from 'react';
import './Player.css';
// import {Link} from 'react-router-dom';
import picture1 from '../../images/img/play_needle.png'
import picture2 from '../../images/img/play_disc.png'
import picture3 from '../../images/img/myDream.jpg'
import picture4 from '../../images/img/play_icn_love_prs.png'
import music from '../../images/img/myDream.m4a'
import musicBtn2 from '../../images/img/play_icn_dld.png'
import musicBtn3 from '../../images/img/play_icn_cmt_prs.png'
import musicBtn4 from '../../images/img/play_icn_more_prs.png'
import musicFoot1 from '../../images/img/play_icn_loop_prs.png'
import musicFoot2 from '../../images/img/lock_btn_prev.png'
import musicFoot3 from '../../images/img/lock_btn_play.png'
import musicFoot4 from '../../images/img/lock_btn_next.png'
import musicFoot5 from '../../images/img/play_icn_src_prs.png'
import musicFootLoveRed from '../../images/img/play_icn_loved_prs.png'


export default class MessageBox extends React.Component {
  changePlayer = () => {
    let $player = this.player,
      $lyric = this.lyric;
    $player.style.display = 'none';
    $lyric.style.display = 'block';
  };
  changeLyric = () => {
    let $player = this.player,
      $lyric = this.lyric;
    $player.style.display = 'block';
    $lyric.style.display = 'none';
  };
  playMusic = () => {
    if (this.audio.paused) {
      this.audio.play();
      this.bang.className = 'playEffect play';
      this.rotate.className = 'playRotate'

    } else {
      this.audio.pause();
      this.bang.className = 'playEffect init';
      this.rotate.className = 'playRotateT'
    }

  };
  back = () => {
    this.props.history.goBack();
  };
  loveBth = (e) => {

    e.stopPropagation();
    this.loveB.style.display = 'none';
  };
  loveAth = (e) => {
    e.stopPropagation();
    this.loveB.style.display = 'block';
  };

  render() {
    return (
      <section className="play_container">
        <audio src={music} preload="" className="musicAudio" ref={x => this.audio = x}></audio>
        <div className="backgroundImg"></div>
        <div className="header">
          <div className="back" onClick={this.back}>返回</div>
          <div className="title">
            <p>我的梦</p>
            <p>张靓颖</p>
          </div>
          <div className="share">分享</div>
        </div>
        <div className="musicBody">
          <div className="player" ref={x => this.player = x} onClick={this.changePlayer}>
            <div><img className="playEffect init" src={picture1} alt="" ref={x => this.bang = x} /></div>
            <div><img src={picture2} alt=""/></div>
            <div><img className="playRotate playRotateT" src={picture3} alt="" ref={x => this.rotate = x}/></div>
            <div className="player-fun">
              <img className="love" src={picture4} onClick={this.loveAth} ref={x => this.loveA = x} alt=""/>
              <img src={musicBtn2} alt=""/>
              <img src={musicBtn3} alt=""/>
              <img src={musicBtn4} alt=""/>
              <img className="loveRed" onClick={this.loveBth} src={musicFootLoveRed} ref={x => this.loveB = x}/>
            </div>
            <div className="addMusic"><img src={musicFootLoveRed} alt=""/><p className="addtext">已添加到我喜欢的音乐</p></div>
            <div className="delMusic"><p className="deltext">已取消喜欢</p></div>
          </div>

          <div className="lyric" ref={x => this.lyric = x} onClick={this.changeLyric}>
            <div className="shelter "></div>
            <div className="volume">
              <span className="current">音量</span>
              <span className="duration">设备</span>
              <div className="proBg">
                <div className="already"></div>
              </div>
            </div>
            <main className="main">

              <div className="wrapper"><p data-minute="00" data-second="01" className="">我的梦 (华为手机主题曲) -
                张靓颖</p><p data-minute="00" data-second="02" className="">词：王海涛/张靓颖</p><p
                data-minute="00" data-second="02" className="">曲：Andy Love</p><p data-minute="00"
                                                                                 data-second="03"
                                                                                 className="">编曲：崔迪</p>
                <p data-minute="00" data-second="08" className="">一直地一直地往前走</p><p data-minute="00"
                                                                                  data-second="13"
                                                                                  className="">疯狂的世界</p>
                <p data-minute="00" data-second="16" className="">迎着痛把眼中所有梦</p><p data-minute="00"
                                                                                  data-second="21"
                                                                                  className="">都交给时间</p>
                <p data-minute="00" data-second="24" className="">想飞就用心地去飞</p><p data-minute="00"
                                                                                 data-second="26"
                                                                                 className="">谁不经历狼狈</p>
                <p data-minute="00" data-second="31" className="select">我想我会忽略失望的灰</p><p
                  data-minute="00" data-second="34" className="">拥抱遗憾的美</p><p data-minute="00"
                                                                              data-second="39"
                                                                              className="">
                  我的梦说别停留等待</p><p data-minute="00" data-second="43" className="">就让光芒折射泪湿的瞳孔</p><p
                  data-minute="00" data-second="47" className="">映出心中最想拥有的彩虹</p><p data-minute="00"
                                                                                   data-second="51"
                                                                                   className="">
                  带我奔向那片有你的天空</p><p data-minute="00" data-second="55" className="">因为你是我的梦</p><p
                  data-minute="01" data-second="07" className="">我的梦</p><p data-minute="01"
                                                                           data-second="16"
                                                                           className="">执着地勇敢地不回头</p>
                <p data-minute="01" data-second="21" className="">穿过了黑夜踏过了边界</p><p data-minute="01"
                                                                                   data-second="24"
                                                                                   className="">
                  路过雨路过风往前冲</p><p data-minute="01" data-second="28" className="">总会有一天站在你身边</p><p
                  data-minute="01" data-second="32" className="">泪就让它往下坠</p><p data-minute="01"
                                                                               data-second="35"
                                                                               className="">溅起伤口的美</p>
                <p data-minute="01" data-second="39" className="">哦别以为失去的最宝贵</p><p data-minute="01"
                                                                                   data-second="43"
                                                                                   className="">
                  才让今天浪费</p><p data-minute="01" data-second="47" className="">我的梦说别停留等待</p><p
                  data-minute="01" data-second="51" className="">就让光芒折射泪湿的瞳孔</p><p data-minute="01"
                                                                                   data-second="55"
                                                                                   className="">
                  映出心中最想拥有的彩虹</p><p data-minute="01" data-second="59" className="">带我奔向那片有你的天空</p><p
                  data-minute="02" data-second="03" className="">因为你是我的梦</p><p data-minute="02"
                                                                               data-second="11"
                                                                               className="">我的梦</p><p
                  data-minute="02" data-second="15" className="">我的梦</p><p data-minute="02"
                                                                           data-second="19"
                                                                           className="">我的梦</p><p
                  data-minute="02" data-second="24" className="">世界会怎么变化</p><p data-minute="02"
                                                                               data-second="26"
                                                                               className="">都不是意外</p>
                <p data-minute="02" data-second="28" className="">记得用心去回答</p><p data-minute="02"
                                                                                data-second="30"
                                                                                className="">命运的精彩</p><p
                  data-minute="02" data-second="32" className="">世界会怎么变化</p><p data-minute="02"
                                                                               data-second="34"
                                                                               className="">都离不开爱</p>
                <p data-minute="02" data-second="36" className="">记得成长的对话</p><p data-minute="02"
                                                                                data-second="39"
                                                                                className="">
                  勇敢地说我不再等待</p><p data-minute="02" data-second="45" className="">就让光芒折射泪湿的瞳孔</p><p
                  data-minute="02" data-second="49" className="">映出心中最想拥有的彩虹</p><p data-minute="02"
                                                                                   data-second="53"
                                                                                   className="">
                  带我奔向那片有你的天空</p><p data-minute="02" data-second="57" className="">因为你是我的梦</p><p
                  data-minute="03" data-second="05" className="">我的梦</p><p data-minute="03"
                                                                           data-second="09"
                                                                           className="">我的梦</p><p
                  data-minute="03" data-second="14" className="">因为你是我的梦</p></div>
            </main>
          </div>
        </div>

        <div className="foot">
          <div className="progress">
            <span className="current">00:00</span>
            <span className="duration">03:40</span>
            <div className="proBg">
              <div className="already">
              </div>
            </div>
          </div>
          <div className="control">
            <span><img src={musicFoot1} alt=""/></span>
            <span><img src={musicFoot2} alt=""/></span>
            <span><img className="playMusic" src={musicFoot3} onClick={this.playMusic} alt=""/></span>
            <span><img src={musicFoot4} alt=""/></span>
            <span><img src={musicFoot5} alt=""/></span>
          </div>
        </div>
        <div className="playMore">
          <div className="moreBtn">
            <span><p>列表循环</p></span>
            <span><p>删除</p></span>
            <span><p>收藏全部</p></span>
          </div>
          <ul className="playerList">
            <li><p>我的梦</p></li>
          </ul>
          <div className="playerListClose"><p>关闭</p></div>
        </div>
      </section>
    )
  }
}

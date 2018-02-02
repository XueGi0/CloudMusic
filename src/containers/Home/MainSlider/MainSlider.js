import React, {Component} from "react";
import {Carousel} from 'antd';
import "./index.less";
import a from './banner.jpg'
import b from './banner-1.jpg'
import c from './banner-2.jpg'
import d from './banner-3.jpg'
import e from './banner-4.jpg'
import f from './banner-5.jpg'
import g from './banner-6.jpg'
let items = [{src: a}, {src: b}, {src: c}, {src: d}, {src: e}, {src: f}, {src: g}];
export default class MainSlider extends Component {
  render() {
    //轮播图数据
    let sliders = this.props.sliders;
    return (
      <div className="cwj-slider-box">
        <Carousel autoplay>
          {
            items.map((item, index) => (
              <div key={index}>
                <img className='slider-img' src={item.src} alt="1"/>
              </div>
            ))
          }

        </Carousel>
      </div>
    )
  }
}


import React from 'react';
import './HomeList.less';


export default class HomeList extends React.Component {
  render() {
    let result = this.props.SongLists.result;
    let res = this.props.NewestLists;

    if (res) {
      let re = res.result || [];
      if (re.length > 0) {
        return (
          <div className="list_MV">
            <div className="list_title">
              <p>推荐MV</p>
              <span className="arrow"> </span>
            </div>
            <ul className="list_con">
              {re.map((item, index) => {
                return (<li key={index}>
                  <img src={item.picUrl} alt=""/>
                  <span id="wode">{item.name}</span><br/>
                  <span id="wode">{item.artistName}</span>
                </li>);
              })}
            </ul>
          </div>)
      }
    }

    return (
      <div className="list">
        <div className="list_title">
          <p>推荐歌单</p>
          <span className="arrow"> </span>
        </div>
        <ul className="list_con">
          {result ? result.map((item, index) => {
            return index < 6 ? (<li key={index}>
              <img src={item.picUrl} alt=""/>
              <p id="wode">{item.name}</p>
            </li>) : null;
          }) : null}
        </ul>
      </div>)
  }
}
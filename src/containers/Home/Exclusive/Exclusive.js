import React from 'react';
import './Exclusive.less';

export default class Exclusive extends React.Component {

  render() {
    let result = this.props.ExclusiveLists.result;
    return (
      <div className="list">
        <div className="list_title">
          <p>独家放送</p>
          <span className="arrow"> </span>
        </div>
        <ul className="exclusiveLists">
          {result ? result.map((item, index) => {
            return index < 2 ? (<li key={index}>
              <img src={item.sPicUrl} alt=""/>
              <p id="wode">{item.name}</p>
            </li>) : (<li key={index}>
              <img src={item.picUrl} alt=""/>
              <p id="wode">{item.name}</p>
            </li>)
          }) : null}
        </ul>
      </div>)
  }
}

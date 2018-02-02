import React from 'react';
import './Night.css';


export default class Night extends React.Component {
  constructor() {
    super();
    this.state = {turn: false};
  }

  Change = () => {
    setTimeout(() => {
      this.setState({turn: !this.state.turn})
    }, 300)
  };

  componentDidMount() {

  }

  render() {

    return (
      <div className="light">{this.state.turn ?
        <input type="checkbox" className="switch" ref={x => this.x = x} checked onClick={this.Change} onChange={() => {
        }}/> :
        <input type="checkbox" className="switch" ref={x => this.x = x} onClick={this.Change} onChange={() => {
        }}/>}</div>)
  }
}
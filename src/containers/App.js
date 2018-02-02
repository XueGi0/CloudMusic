import React from 'react';
import Footer from "../components/Footer/Footer";
export default class App extends React.Component {
  render() {
    console.log(this.props.children);
    return <div>
      {this.props.children}
      <Footer/>
    </div>
  }
}

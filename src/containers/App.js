import React from 'react';
import Footer from "../components/Footer/Footer";
export default class App extends React.Component {
  render() {
    return <div>
      {this.props.children}
      <Footer/>
    </div>
  }
}

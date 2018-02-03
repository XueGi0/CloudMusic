import React from 'react';
import './index.less';
import {withRouter} from 'react-router-dom';
class MHeader extends React.Component {

  render(){
    return <div className="m-header">
      {this.props.children}
    </div>

  }
}
export default withRouter(MHeader);



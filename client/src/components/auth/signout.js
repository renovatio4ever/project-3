import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount() {
        this.props.signUserOut()
    }
    render() {
        return (
            <div>
      <iframe src="./thankyou.html" width="1800" height="1000" frameBorder="0"></iframe>
      </div>
        );
    }
}

export default connect(null, actions)(Signout)
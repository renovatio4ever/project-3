// Application: Project-3: MERN Authentication with API Web Part Driven Dashboard
// Author: Peter Santiago
// Last Updated: 03-19-2019
// Sources
//-- Keen: https://keen.github.io/dashboards/ (Create Dashboard with extended API)
//-- Auth: https://github.com/amazingandyyy/mern-stack (Easy to use portable Authentication Package)

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
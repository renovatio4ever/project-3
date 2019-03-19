// Application: Project-3: MERN Authentication with API Web Part Driven Dashboard
// Author: Peter Santiago
// Last Updated: 03-19-2019
// Sources
//-- Keen: https://keen.github.io/dashboards/ (Create Dashboard with extended API)
//-- Auth: https://github.com/amazingandyyy/mern-stack (Easy to use portable Authentication Package)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({auth}) {
    return { authenticated: auth.authenticated };
  }
  Authentication.contextTypes = {
    router: PropTypes.object
  }

  return connect(mapStateToProps)(Authentication);
}
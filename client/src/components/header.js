// Application: Project-3: MERN Authentication with API Web Part Driven Dashboard
// Author: Peter Santiago
// Last Updated: 03-19-2019
// Sources
//-- Keen: https://keen.github.io/dashboards/ (Create Dashboard with extended API)
//-- Auth: https://github.com/amazingandyyy/mern-stack (Easy to use portable Authentication Package)

import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    renderSignButton(){
        if (this.props.authenticated){
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signout">Sign out</NavLink>
                </li>
            )
        }else{
            return (
                [
                    <li className="nav-item" key="1">
                        <NavLink to="/signin" className="nav-link">Sign in</NavLink>
                    </li>,
                    <li className="nav-item" key="2">
                        <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                    </li>
                ]
            )
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Nano-IO Dashboards</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/public">Welcome</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/account">WWE Dashboard</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {this.renderSignButton()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)
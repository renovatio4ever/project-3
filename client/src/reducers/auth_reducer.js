// Application: Project-3: MERN Authentication with API Web Part Driven Dashboard
// Author: Peter Santiago
// Last Updated: 03-19-2019
// Sources
// -- Keen: https://keen.github.io/dashboards/ (Create Dashboard with extended API)
//-- Auth: https://github.com/amazingandyyy/mern-stack (Easy to use portable Authentication Package)

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    TRY_CONNECT
} from '../actions/types';

export default function(state={}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true}
        case UNAUTH_USER:
            return { ...state, authenticated: false}
        case AUTH_ERROR:
            return { ...state, error: action.payload}
        case TRY_CONNECT:
            return { ...state, status: action.payload}
        default:
            return state
    }
}
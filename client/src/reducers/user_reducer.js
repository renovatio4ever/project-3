// Application: Project-3: MERN Authentication with API Web Part Driven Dashboard
// Author: Peter Santiago
// Last Updated: 03-19-2019
// Sources
// -- Keen: https://keen.github.io/dashboards/ (Create Dashboard with extended API)
//-- Auth: https://github.com/amazingandyyy/mern-stack (Easy to use portable Authentication Package)

import {
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE_GOOD,
    UPDATE_USER_PROFILE_FAIL
} from '../actions/types';

let INITIAL_STATE = {
    updateProfileFailMsg: '',
    profile: null
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return { ...state, profile: action.payload }
        case UPDATE_USER_PROFILE_GOOD:
            return { ...state, updateProfileFailMsg: '' }
        case UPDATE_USER_PROFILE_FAIL:
            return { ...state, updateProfileFailMsg: 'Incorrect Password' }
        default:
            return state
    }
}
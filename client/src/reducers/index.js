// Application: Project-3: MERN Authentication with API Web Part Driven Dashboard
// Author: Peter Santiago
// Last Updated: 03-19-2019
// Sources
//-- Keen: https://keen.github.io/dashboards/ (Create Dashboard with extended API)
//-- Auth: https://github.com/amazingandyyy/mern-stack (Easy to use portable Authentication Package)

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import auth from './auth_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
  form,
  auth,
  user
});

export default rootReducer;

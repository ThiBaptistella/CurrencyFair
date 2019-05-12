
// combine all reducers in the app into a single index reducer
// more reducers going here


import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';

export default combineReducers({
  simpleReducer
});
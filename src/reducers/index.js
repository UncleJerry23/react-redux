import { combineReducers } from 'redux';
import comments from  './commentReducer';
import posts from  './postReducer';

export default combineReducers({
  comments,
  posts
});


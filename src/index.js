import postReducer from './reducers/postReducer';
import {
  createPost,
} from './actions/postActions';

const initialState = {
  posts: []
};

postReducer(initialState, createPost('hiya'));

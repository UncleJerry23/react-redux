import postReducer from './reducers/postReducer';
import {
  createPost,
  deletePost
} from './actions/postActions';

const initialState = {
  posts: []
};

postReducer(initialState, createPost('hiya'));

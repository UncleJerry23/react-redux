import { createStore } from 'redux';
import {
  createPost,
  deletePost
} from '../actions/postActions';

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CREATE_POST':
      return { state: { posts: [...initialState.posts, action.payload] } };
    case 'DELETE_POST':
      return { state: { posts: [...initialState.posts].filter(post => post !== action.payload) } };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(createPost('thing about a thing'));
console.log('after post', store.getState());

store.dispatch(deletePost('thing about a thing'));
console.log('after delete post', store.getState());

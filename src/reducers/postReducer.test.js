import postReducer from './postReducer';
import {
  createPost,
  deletePost
} from '../actions/postActions';

describe('post reducer', () => {
  
  it('creates a post', () => {
    const initialState = {
      posts: []
    };

    console.log(postReducer(initialState, createPost('bla')));

    expect(postReducer(initialState, createPost('bla'))).toEqual({ 
      state: {
        posts: ['bla']
      } 
    });
  });

  it('deletes a post', () => {
    const initialState = {
      posts: ['bla']
    };

    console.log(postReducer(initialState, deletePost('bla')));

    expect(postReducer(initialState, deletePost('bla'))).toEqual({ 
      state: {
        posts: []
      } 
    });
  });
});

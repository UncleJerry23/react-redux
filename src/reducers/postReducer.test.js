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

    expect(postReducer(initialState, createPost('bla', 'myFirstPost'))).toEqual({ 
      state: {
        posts: [
          {
            postBody: 'bla',
            title: 'myFirstPost'
          }
        ]
      } 
    });
  });

  it('deletes a post', () => {
    const initialState = {
      posts: ['bla']
    };

    expect(postReducer(initialState, deletePost('bla'))).toEqual({ 
      state: {
        posts: []
      } 
    });
  });
});

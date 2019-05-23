import commentReducer from './commentReducer';
import {
  createComment,
  deleteComment
} from '../actions/commentActions';

describe('comment reducer', () => {
  it('creates a comment', () => {
    const initialState = {
      comments: []
    };

    const action = createComment({ 
      postTitle: 'myPost', 
      commentTitle: 'myComment', 
      comment: 'great post' 
    });

    expect(commentReducer(initialState, action)).toEqual({
      state: {
        comments: [{
          comment: 'great post', 
          commentTitle: 'myComment', 
          postTitle: 'myPost'
        }]
      }
    });
  });
  it('deletes a comment', () => {
    const initialState = {
      comments: [
        { 
          postTitle: 'myPost', 
          commentTitle: 'myComment', 
          comment: 'great post' 
        }
      ]
    };

    const action = deleteComment({ 
      commentTitle: 'myComment'
    });

    expect(commentReducer(initialState, action)).toEqual({
      state: {
        comments: []
      }
    });
  });
});

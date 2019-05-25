import commentReducer from './commentReducer';

describe('comment reducer', () => {
  it('creates a comment', () => {
    const initialState = {};

    const action = { 
      type: 'CREATE_COMMENT',
      payload: {
        postId: '0', 
        title: 'myComment', 
        body: 'great post' 
      }
    };

    expect(commentReducer(initialState, action)).toEqual({ 
      0: [ 
        { 
          title: 'myComment', 
          body: 'great post' 
        } 
      ] 
    });
  });

  it('deletes a comment', () => {
    const initialState = {
      0: [ 
        { 
          title: 'myComment', 
          body: 'great post' 
        } 
      ]
    };

    const action = { 
      type: 'DELETE_COMMENT',
      payload: {
        postId: '0',
        commentId: '0'
      }
    };

    expect(commentReducer(initialState, action)).toEqual({
      0: []
    });
  });
});

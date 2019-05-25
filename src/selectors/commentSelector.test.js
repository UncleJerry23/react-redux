import { getComments } from './commentSelectors';

describe('comment selector', () => {
  it('gets that there comment', () => {
    const state = {
      posts: [
        { title: 'mypost', postBody: 'bla bla bla?' },
        { title: 'yourpost', postBody: 'yee haww?' }
      ],
      comments: [
        { 
          postTitle: 'mypost', 
          commentTitle: 'myComment', 
          comment: 'great post' 
        },
        { 
          postTitle: 'mypost', 
          commentTitle: 'your comment', 
          comment: 'bad post' 
        }
      ]
    };

    expect(getComments(state, 0)).toEqual({ 
      postTitle: 'mypost', 
      commentTitle: 'myComment', 
      comment: 'great post' 
    });
  });
});

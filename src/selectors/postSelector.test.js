import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'mypost', postBody: 'bla bla bla?' },
        { title: 'yourpost', postBody: 'yee haww?' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { title: 'mypost', postBody: 'bla bla bla?' },
      { title: 'yourpost', postBody: 'yee haww?' }
    ]);
  });

  it('gets a post by index', () => {
    const state = {
      posts: [
        { title: 'mypost', postBody: 'bla bla bla?' },
        { title: 'yourpost', postBody: 'yee haww?' }
      ]
    };

    expect(getPost(state, 'mypost')).toEqual({ postBody: 'bla bla bla?', title: 'mypost' });
  });
});

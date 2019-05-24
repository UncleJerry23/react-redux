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
      { id: 0, title: 'mypost', postBody: 'bla bla bla?' },
      { id: 1,  title: 'yourpost', postBody: 'yee haww?' }
    ]);
  });

  it('gets a post by index', () => {
    const state = {
      posts: [
        { id: 0, title: 'mypost', postBody: 'bla bla bla?' },
        { id: 1,  title: 'yourpost', postBody: 'yee haww?' }
      ]
    };

    expect(getPost(state, 0)).toEqual({ id: 0, postBody: 'bla bla bla?', title: 'mypost' });
  });
});

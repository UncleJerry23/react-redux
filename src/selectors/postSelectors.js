export const getPosts = state =>  state.posts.map(({ title, postBody }) => ({
  postBody,
  title
}));

export const getPost = (state, title) => getPosts(state).find(post => post.title === title);

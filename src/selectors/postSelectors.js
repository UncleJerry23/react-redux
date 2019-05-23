export const getPosts = state =>  state.posts;

export const getPost = (state, title) => getPosts(state).find(post => post.title === title);

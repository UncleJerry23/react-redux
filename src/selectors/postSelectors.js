export const getPosts = state =>  state.posts;

export const getPost = (state, id) => getPosts(state)[id];

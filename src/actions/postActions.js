const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';

const createPost = (post, title) => ({
  type: CREATE_POST,
  payload: {
    postBody: post,
    title: title
  }
});

const deletePost = postTitle => ({
  type: DELETE_POST,
  payload: postTitle
});

export {
  createPost,
  deletePost
};



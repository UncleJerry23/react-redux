const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';

const createPost = post => ({
  type: CREATE_POST,
  payload: post
});

const deletePost = post => ({
  type: DELETE_POST,
  payload: post
});

export {
  createPost,
  deletePost
};



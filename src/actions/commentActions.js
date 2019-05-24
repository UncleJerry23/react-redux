const CREATE_COMMENT = 'CREATE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const createComment = (postId, commentTitle, comment) => ({
  type: CREATE_COMMENT,
  payload: {
    postId: postId,
    title: commentTitle,
    body: comment
  }
});

const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId }
});

export {
  createComment,
  deleteComment
};

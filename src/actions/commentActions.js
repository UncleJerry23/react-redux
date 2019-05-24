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

const deleteComment = commentTitle => ({
  type: DELETE_COMMENT,
  payload: commentTitle
});

export {
  createComment,
  deleteComment
};

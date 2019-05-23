const CREATE_COMMENT = 'CREATE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const createComment = ({ postTitle, commentTitle, comment }) => ({
  type: CREATE_COMMENT,
  payload: {
    postTitle: postTitle,
    commentTitle: commentTitle,
    comment: comment
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

import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComment }) {
  const commentList = comments.map((comment, i) => (

    <li key={`${comment.title}-${i}`}>
      <Comment comment={comment} deleteComment={deleteComment} id={i} />
    </li>
  ));

  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comments;

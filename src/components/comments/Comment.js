import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment, id, deleteComment }) {
  return (
  <>
    <h3>{comment.title}</h3>
    <p>{comment.body}</p>
    <button onClick={deleteComment.bind(null, id)}>Delete</button>
  </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;

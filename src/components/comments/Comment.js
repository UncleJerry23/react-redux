import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
  <>
    <h3>{comment.title}</h3>
    <p>{comment.comment}</p>
  </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
  }).isRequired,
};

export default Comment;

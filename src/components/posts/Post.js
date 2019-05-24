import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

function Post({ post, deletePost }) {
  return (
    <Link to={`/post/${post.id}`}>
      <h3>{post.title}</h3>
      <button onClick={deletePost}>Delete</button>
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    postBody: PropTypes.string.isRequired
  }).isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;


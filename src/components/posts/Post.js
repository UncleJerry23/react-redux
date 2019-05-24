import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

function Post({ post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <h3>{post.title}</h3>
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    postBody: PropTypes.string.isRequired
  })
};

export default Post;


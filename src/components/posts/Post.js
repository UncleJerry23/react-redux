import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

function Post({ post }) {
  console.log(post.id);
  return (
    <Link to={`/post/id=${post.id}`}>
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


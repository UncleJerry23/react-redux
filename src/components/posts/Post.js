import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.postBody}</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    postBody: PropTypes.string.isRequired
  })
};

export default Post;


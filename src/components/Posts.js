import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ postArr }) {
  const postList = postArr.map(post => (

    <li key={post.id}>
      <Post post={post} />
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  postArr: PropTypes.array.isRequired
};

export default Posts;

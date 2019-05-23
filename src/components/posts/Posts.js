import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';


function Posts({ posts }) {
  const postList = posts.map((post, i) => (

    <li key={`${post.title}-${i}`}>
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
  posts: PropTypes.array.isRequired
};

export default Posts;

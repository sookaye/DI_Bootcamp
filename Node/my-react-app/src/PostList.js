import React from 'react';
import postsData from './posts.json';

function PostList() {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postsData.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

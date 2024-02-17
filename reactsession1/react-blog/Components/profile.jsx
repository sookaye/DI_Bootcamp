import React from 'react';
import './Banner.css';

const title = ({ posts }) => {
    return (
      <div className="blog-list">
        {posts.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} />
        ))}
      </div>
    );
  };

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
};
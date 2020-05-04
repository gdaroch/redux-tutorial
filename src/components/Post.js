import React from 'react';
import { Link } from 'react-router-dom';

export const Post = ({ post, showButton = true }) => (
  <article className="post-excerpt">
  <h2>{post.title}</h2>
  <p>{post.body.substring(0, 100)}</p>
  {showButton &&
    <Link to={`/posts/${post.id}`} className="button">
      View Post
    </Link>
  }
  </article>
);

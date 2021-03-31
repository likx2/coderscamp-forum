import React from 'react';
import { Link } from 'react-router-dom';

import Post from '../types/Post';

export default function PostSample({ post }: { post: Post }) {
  return (
    <Link to={`/posts/${post._id}`}>
      <h3>{post.title}</h3>
    </Link>
  );
}

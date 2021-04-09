import React from 'react';
import { Link } from 'react-router-dom';

import Post from '../types/Post';

interface PostSampleProps {
  post: Post;
  currentPage: number;
}
const PostSample = ({ post, currentPage }: PostSampleProps) => {
  return (
    <Link to={`/posts/${currentPage}/${post._id}`}>
      <h3>{post.title}</h3>
    </Link>
  );
};
export default PostSample;

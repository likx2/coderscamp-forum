import React, { useEffect, useState } from 'react';

import Post from '../types/Post';
import PostSample from './PostSample';

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then((data) => data.json())
      .then((clientData) => setPosts(clientData))
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <PostSample key={post._id} post={post} />
      ))}
    </div>
  );
}

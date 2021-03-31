import React, { useEffect, useState } from 'react';

import Post from '../types/Post';

export default function ExpandedPost({ match }: { match: any }) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${match.params.id}`)
      .then((data) => data.json())
      .then((clientData) => setPost(clientData))
      .catch((err) => {
        throw err;
      });
  }, [match.params.id]);

  return <h1>{post?.title}</h1>;
}

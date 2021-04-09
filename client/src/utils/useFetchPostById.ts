import { useEffect, useState } from 'react';

import Post from '../types/Post';

const useFetchPostById = (url: string, id: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const pulledPost = await fetch(`${url}/posts/${id}`);

      const clientPost = await pulledPost.json();

      const pulledAuthor = await fetch(`${url}/users/${clientPost.author}`);

      const clientAuthor = await pulledAuthor.json();

      setPost(clientPost);
      setAuthor(clientAuthor.userName);
      setIsLoading(false);
    };
    fetchData();
  }, [url, id]);

  return [isLoading, { ...post, author }] as [boolean, Post];
};

export default useFetchPostById;

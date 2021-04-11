import { useEffect, useState } from 'react';

import axios from 'axios';

import Post from '../types/Post';

const useFetchPostById = (url: string, id: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientPost = await (await axios.get(`${url}/posts/${id}`)).data;

        const clientAuthor = await (
          await axios.get(`${url}/users/${clientPost.author}`)
        ).data;
        setPost(clientPost);
        setAuthor(clientAuthor.userName);
      } catch (e) {
        alert(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, id]);

  return { isLoading, post: { ...post, author } } as {
    isLoading: boolean;
    post: Post;
  };
};

export default useFetchPostById;

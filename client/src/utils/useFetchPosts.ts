import { useEffect, useState } from 'react';

import axios from 'axios';

import Post from '../types/Post';
import User from '../types/User';

const useFetchPosts = (url: string, page: number, postsPerPage: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPosts, setTotalPosts] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (
          await axios.get(`${url}/posts?page=${page}&limit=${postsPerPage}`)
        ).data;
        const clientPosts: Post[] = await Promise.all(
          data.currentPosts.map(async (clientPost: Post) => {
            const author = await (
              await axios.get(`${url}/users/${clientPost.author}`)
            ).data;

            return { ...clientPost, author: author.userName } as Post;
          }),
        );
        setTotalPosts(data.totalPosts);
        setPosts(clientPosts);
      } catch (e) {
        alert(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, page, postsPerPage]);
  return { isLoading, totalPosts, posts: [...posts] };
};

export default useFetchPosts;

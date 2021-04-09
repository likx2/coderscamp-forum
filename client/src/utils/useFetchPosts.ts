import { useEffect, useState } from 'react';

import Post from '../types/Post';
import User from '../types/User';

const useFetchPosts = (url: string, page: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPosts, setTotalPosts] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${url}/posts?page=${page}&limit=5`);
      const dataJson = await data.json();
      const clientPosts: Post[] = await Promise.all(
        dataJson.currentPosts.map(async (pulledPostJson: Post) => {
          const author = await fetch(`${url}/users/${pulledPostJson.author}`);

          const authorJson: User = await author.json();

          return { ...pulledPostJson, author: authorJson.userName } as Post;
        }),
      );
      setTotalPosts(dataJson.totalPosts);
      setPosts(clientPosts);
      setIsLoading(false);
    };
    fetchData();
  }, [url, page]);
  return [isLoading, totalPosts, [...posts]] as [boolean, number, Post[]];
};

export default useFetchPosts;

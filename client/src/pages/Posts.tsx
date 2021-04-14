import React, { useState } from 'react';

import styled from 'styled-components';

import LoadingSvg from '../assets/Loader.svg';
import Pagination from '../components/Pagination';
import PostSample from '../components/PostSample';
import Post from '../types/Post';
import useFetchPosts from '../utils/useFetchPosts';

const Loader = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 20px;
`;
const POSTS_PER_PAGE = 10;
const Posts = ({ match }: any) => {
  console.log(match);
  const { isLoading, totalPosts, posts } = useFetchPosts(
    match.url,
    match.params.page,
    POSTS_PER_PAGE,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  if (isLoading) return <Loader alt="Loading" src={LoadingSvg} />;
  return (
    <div>
      {posts.map((post: Post) => (
        <PostSample currentPage={currentPage} key={post._id} post={post} />
      ))}
      <Pagination
        postsPerPage={POSTS_PER_PAGE}
        setCurrentPage={setCurrentPage}
        totalPosts={totalPosts}
        url={match.url}
      />
    </div>
  );
};
export default Posts;

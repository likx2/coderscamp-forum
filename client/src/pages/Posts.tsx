import React, { useState } from 'react';

import styled from 'styled-components';

import Pagination from '../components/Pagination';
import PostSample from '../components/PostSample';
import LoadingSvg from '../images/Loader.svg';
import Post from '../types/Post';
import useFetchPosts from '../utils/useFetchPosts';

const Loader = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;
const Posts = ({ match }: any) => {
  const [isLoading, totalPosts, posts] = useFetchPosts(
    'http://localhost:4000',
    match.params.page,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  if (isLoading) return <Loader alt="Loading" src={LoadingSvg} />;
  return (
    <div>
      {posts.map((post: Post) => (
        <PostSample currentPage={currentPage} key={post._id} post={post} />
      ))}
      <Pagination
        postsPerPage={5}
        setCurrentPage={setCurrentPage}
        totalPosts={totalPosts}
      />
    </div>
  );
};
export default Posts;
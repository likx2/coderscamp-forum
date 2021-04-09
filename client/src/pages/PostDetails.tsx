import React from 'react';

import styled from 'styled-components';

import ExpandedPost from '../components/ExpandedPost';
import LoadingSvg from '../images/Loader.svg';
import useFetchPostById from '../utils/useFetchPostById';

const Loader = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

const PostDetails = ({ match }: any) => {
  console.log('posDetails');

  const [isLoading, post] = useFetchPostById(
    'http://localhost:4000',
    match.params.id,
  );

  if (isLoading) return <Loader alt="Loading" src={LoadingSvg} />;

  return <ExpandedPost post={post} />;
};

export default PostDetails;

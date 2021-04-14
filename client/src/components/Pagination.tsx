import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage(a: number): void;
  url: string;
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  margin: 44px 0 0;
  padding: 17px;
  background-color: #ffff;
  border-radius: 15px;
`;
const PageBtn = styled.button`
  width: 48px;
  height: 42px;
  background-color: #e7e8e6;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #3d4443;
  cursor: pointer;
  margin: 0 8px;
`;
const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  url,
}: PaginationProps) => {
  const history = useHistory();
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers[i] = i + 1;
  }

  const clickHandler = (e: any) => {
    e.preventDefault();
    const actualUrl = url.slice(0, -1);
    history.push(`${actualUrl}${e.target.textContent}`);
    setCurrentPage(e.target.textContent);
  };

  return (
    <Wrapper>
      {pageNumbers.map((number: number) => (
        <PageBtn key={number} onClick={clickHandler} type="button">
          {number}
        </PageBtn>
      ))}
    </Wrapper>
  );
};

export default Pagination;

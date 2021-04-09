import React from 'react';
import { useHistory } from 'react-router-dom';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage(a: number): void;
}
const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
}: PaginationProps) => {
  const history = useHistory();
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers[i] = i + 1;
  }
  const linkHandler = (e: any) => {
    e.preventDefault();
    history.push(`/posts/${e.target.textContent}`);
    setCurrentPage(e.target.textContent);
  };

  return (
    <div>
      {pageNumbers.map((number: number) => {
        return (
          <button key={number} onClick={linkHandler} type="button">
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

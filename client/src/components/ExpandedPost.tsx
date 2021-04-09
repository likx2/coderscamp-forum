import React from 'react';

import styled from 'styled-components';

import Post from '../types/Post';

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 67px auto 0 auto;
  padding: 55px 0 0;
  background-color: #fff;
  border-radius: 15px;
`;
const Wrapper = styled.div`
  width: 90%;
  max-width: 1113px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 40px;
  text-align: center;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  border-radius: 30px;
`;
const Main = styled.div`
  max-width: 946px;
  margin: 0 auto;
`;
const Capture = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 0 0;
  font-size: 20px;
  font-weight: 500px;
`;
const Content = styled.p`
  font-size: 26px;
  font-weight: 500px;
  margin: 60px 0 0;
`;

const ExpandedPost = ({ post }: { post: Post }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{post.title}</Title>
        <Main>
          <Img alt="Post" src={post.imageUrl} />
          <Capture>
            <div>@{post.author}</div>
            <div>
              {post.hashtags.reduce(
                (total: string, current: string) =>
                  total.concat(`  #${current}`),
                '',
              )}
            </div>
          </Capture>
        </Main>
        <Content>{post.content}</Content>
      </Wrapper>
    </Container>
  );
};

export default ExpandedPost;

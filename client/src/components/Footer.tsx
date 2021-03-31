import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background: gray; */
`;

const Wrapper = styled.div`
  width: 70%;
  max-width: 1400px;
  border-top: 3px solid #c4c4c4;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 30px;
`;

const LinksContainer = styled.div`
  width: 35%;
  height: 60px;
  display: flex;
  flex-direction: column;
`;

const HashtagsContainer = styled(LinksContainer)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: rgba(61, 68, 67, 0.8);
  text-decoration: none;
  display: inline-block;
  margin-right: 6px;
  font-weight: 600;

  &:hover {
    color: #3d4443;
  }
`;

const StyledTheBestHashtag = styled(StyledLink)`
  font-weight: 800;
  font-size: 20px;
`;

const StyledMediumHashtag = styled(StyledLink)`
  font-weight: 600;
  font-size: 16px;
`;

const StyledNormalHashtag = styled(StyledLink)`
  font-weight: 400;
  font-size: 14px;
`;

const Sign = styled.h6`
  color: rgba(61, 68, 67, 0.6);
  font-weight: 400;
  margin-top: 50px;
`;

const Footer: FC = () => {
  const [hashtags, setHashtags] = useState([
    'jedzenie',
    'bilard',
    'COVID',
    'pzpn1',
    'bilard1',
    'COVID1',
    'pzpn2',
    'bilard2',
    'COVID2',
    'pzpn3',
    'bilard3',
  ]);

  // useEffect(() => {
  //   const fetchHashtags = async () => {
  //     const = await axios.get('url');

  //     setHashtags(result.data);
  //   };

  //   fetchHashtags();
  // }, []);

  const theBestHashtags = hashtags.slice(0, 4).map((hashtag) => (
    <StyledTheBestHashtag key={hashtag} to={`url.../ranking/${hashtag}`}>
      {hashtag}
    </StyledTheBestHashtag>
  ));

  const mediumHashtags = hashtags.slice(4, 7).map((hashtag) => (
    <StyledMediumHashtag key={hashtag} to={`url.../ranking/${hashtag}`}>
      {hashtag}
    </StyledMediumHashtag>
  ));

  const normalHashtags = hashtags.slice(7, 10).map((hashtag) => (
    <StyledNormalHashtag key={hashtag} to={`url.../ranking/${hashtag}`}>
      {hashtag}
    </StyledNormalHashtag>
  ));

  const allHashtags = [
    theBestHashtags[0],
    normalHashtags[0],
    mediumHashtags[0],
    theBestHashtags[1],
    normalHashtags[1],
    mediumHashtags[1],
    mediumHashtags[2],
    theBestHashtags[2],
    theBestHashtags[3],
    normalHashtags[2],
  ];

  return (
    <FooterWrapper>
      <Wrapper>
        <LinksContainer>
          <StyledLink to="/">Idea CodeForum</StyledLink>
          <StyledLink to="/">Regulamin</StyledLink>
        </LinksContainer>
        <HashtagsContainer>
          {/* {hashtags.map((hashtag) => (
            <StyledLink key={hashtag} to={`url.../ranking/${hashtag}`}>
              {hashtag}
            </StyledLink>
          ))} */}
          {allHashtags.map((hashtag) => hashtag)}
        </HashtagsContainer>
      </Wrapper>
      <Sign>Created by !Programiści</Sign>
    </FooterWrapper>
  );
};

export default Footer;

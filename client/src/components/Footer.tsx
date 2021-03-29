import { FC } from 'react';

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Container = styled.div`
  width: 35%;
  height: 60px;
  /* border: 1px solid red; */
`;

const Footer: FC = () => (
  <FooterWrapper>
    <Wrapper>
      <Container>
        <p>Idea CodeForum</p>
        <p>Regulamin</p>
      </Container>
      <Container>hashtags</Container>
    </Wrapper>
  </FooterWrapper>
);

export default Footer;

import { FC } from 'react';

import styled from 'styled-components';

import searchIcon from '../assets/search.svg';

const Header = styled.header`
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.nav`
  border-radius: 15px;
  width: 70%;
  max-width: 1400px;
  height: 81px;
  background: rgba(255, 255, 255, 0.45);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 27px;
  color: #3d4443;
  cursor: pointer;
`;

const SearchBarWrapper = styled.div`
  height: 50px;
  width: 33%;
  position: relative;
`;

const SearchBar = styled.input`
  border: none;
  outline: none;
  background: #f1f1f0;
  border-radius: 20px;
  height: 50px;
  width: 100%;
  padding-left: 40px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 245px;
`;

const Switcher = styled.div`
  width: 92px;
  height: 50px;
  border-radius: 30px;
  background: #e7e8e6;
`;

const LoginButton = styled.button`
  background: rgba(255, 234, 137, 0.9);
  height: 50px;
  width: 124px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

const Navbar: FC = () => (
  <Header>
    <Wrapper>
      <Logo>CampForum</Logo>
      <SearchBarWrapper>
        <SearchIcon src={searchIcon} />
        <SearchBar type="text" />
      </SearchBarWrapper>
      <ButtonsWrapper>
        <Switcher />
        <LoginButton>Zaloguj się</LoginButton>
      </ButtonsWrapper>
    </Wrapper>
  </Header>
);

export default Navbar;

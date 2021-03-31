import { FC, useEffect, useImperativeHandle, useState } from 'react';
import { Link, Router } from 'react-router-dom';

import styled from 'styled-components';

import searchIcon from '../assets/search.svg';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  width: 90%;
  max-width: 1600px;
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.45);
  margin: 20px;
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

const Switch = styled.div`
  position: relative;
  left: 8%;
  top: 50%;
  transform: translateY(-50%);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #ffffff;
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

const HashtagWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  width: 70%;
  max-width: 1400px;
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.45);
  margin: 30px;
  list-style: none;
`;

const Hashtag = styled(Link)`
  text-decoration: none;
  color: rgba(61, 68, 67, 0.7);
  font-weight: 500;

  &:hover {
    color: #3d4443;
  }
`;

const Navbar: FC = () => {
  const [darkmode, setDarkmode] = useState(false);
  const hashtags = [
    'Świat',
    'Zdrowie',
    'Sport',
    'Giełda',
    'Programowanie',
    'Uroda',
  ];

  return (
    <Header>
      <Wrapper>
        <Logo>CampForum</Logo>
        <SearchBarWrapper>
          <SearchIcon src={searchIcon} />
          <SearchBar type="text" />
        </SearchBarWrapper>
        <ButtonsWrapper>
          <Switcher>
            <Switch onClick={() => setDarkmode(!darkmode)} />
          </Switcher>
          <LoginButton>Zaloguj się</LoginButton>
        </ButtonsWrapper>
      </Wrapper>
      <HashtagWrapper>
        {hashtags.map((h) => (
          <Hashtag key={h} to={`url../ranking/${h}`}>
            {h}
          </Hashtag>
        ))}
      </HashtagWrapper>
    </Header>
  );
};

export default Navbar;

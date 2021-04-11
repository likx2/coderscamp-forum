import { FC, useEffect, useImperativeHandle, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import searchIcon from '../assets/search.svg';
import LoginModal, { useModal } from './login/LoginModal';

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

const SwitchWrapper = styled.div`
  position: relative;
`;
const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 92px;
  height: 50px;
  border-radius: 30px;
  background: #e7e8e6;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin: 7px 0px 10px 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const SwitchInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchLabel} {
    background: rgba(255, 234, 137, 0.9);
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin: 7px 0px 10px 53px;
      transition: 0.2s;
    }
  }
`;

const Navbar: FC = () => {
  const hashtags = [
    'Świat',
    'Zdrowie',
    'Sport',
    'Giełda',
    'Programowanie',
    'Uroda',
  ];

  const { isShowing, toggle } = useModal();

  return (
    <Header>
      <Wrapper>
        <Logo>CampForum</Logo>
        <SearchBarWrapper>
          <SearchIcon src={searchIcon} />
          <SearchBar type="text" />
        </SearchBarWrapper>
        <ButtonsWrapper>
          <SwitchWrapper>
            <SwitchInput id="checkbox" type="checkbox" />
            <SwitchLabel htmlFor="checkbox" />
          </SwitchWrapper>
          {localStorage.getItem('auth-token') !== ""?
          <LoginButton onClick={() => {
            localStorage.setItem('auth-token', "");
            toggle();
          }}>Wyloguj się</LoginButton>:
          <LoginButton onClick={toggle}>Zaloguj się</LoginButton>
        }
        </ButtonsWrapper>
        
        <LoginModal hide={toggle} isShowing={isShowing}/>
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

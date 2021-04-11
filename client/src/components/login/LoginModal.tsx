import React, { ReactElement, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import LoginForm, { LoginDetails } from './LoginForm';

// Styles
const ModalWindow = styled.div`
  position: absolute;
  bottom: 50%;
  background: rgba(255, 255, 255);
  border-radius: 15px;
  padding: 15px;
`;

// Modal hook
export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

export default function LoginModal({
  isShowing,
  hide
}: {
  isShowing: boolean;
  hide: ()=> void
}): ReactElement {
  const [error, setError] = useState("");
  const loginHandler = (details: LoginDetails) => {
    axios
      .post('http://localhost:4000/auth/login/', details)
      .then((result) => {
        // details correct
        console.log('Welcome!');
        localStorage.setItem('auth-token', result.headers['x-auth-token']);
        hide();
      })
      .catch((er) => {
        // details incorrect
        setError(er.response.data);
      });
  };

  return isShowing ? (
    <ModalWindow>
      <LoginForm error={error} login={loginHandler} />
    </ModalWindow>
  ) : (
    <></>
  );
}

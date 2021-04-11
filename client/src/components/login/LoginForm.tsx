import React, { ReactElement, useState } from 'react';

import styled from 'styled-components';

// Types
type LoginFormProps = {
  login: (details: LoginDetails) => void;
  error: string;
};

export type LoginDetails = {
  login: string;
  password: string;
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction:column;
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormHeader = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 10px 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const Label = styled.label`
  text-align:center;
`;

const Input = styled.input`
border: none;
  outline: none;
  background: #f1f1f0;
  border-radius: 20px;
  height: 50px;
  padding-left: 40px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;`;

const SubmitButton = styled.button`
background: rgba(255, 234, 137, 0.9);
  height: 50px;
  width: 124px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;`;

const ErrorMessage = styled.div``;

const FormFooter = styled.div``;

const Link = styled.a``;

export default function LoginForm({
  login,
  error,
}: LoginFormProps): ReactElement {
  const [details, setDetails] = useState({ login: '', password: '' });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    login(details);
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormInner className="form-inner">
        <FormHeader className="form-header">Login</FormHeader>
        {(error !== "")?(<ErrorMessage>{error}</ErrorMessage>) : ""}
        <FormGroup>
          <Label htmlFor="login">
            Nazwa użytkownika lub email
          </Label>
          <Input
              id="login"
              name="login"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setDetails({ ...details, login: e.target.value })
              }
              type="text"
              value={details.login}
            />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            Hasło
          </Label>
          <Input
              id="password"
              name="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setDetails({ ...details, password: e.target.value })
              }
              type="password"
              value={details.password}
            />
        </FormGroup>
        <SubmitButton type="submit">Zaloguj się</SubmitButton>
      </FormInner>
      <FormFooter>
        Nie masz konta? <Link href="http://">Zarejestruj się</Link>
      </FormFooter>
    </Form>
  );
}

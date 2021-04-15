import { FC } from 'react';

import styled from 'styled-components';

import Footer from './Footer';
import Navbar from './Navbar';

const StyledMain = styled.main`
  width: 90%;
  max-width: 1600px;
  margin: 20px auto;
`;

interface Props {
  // theme: {
  //   title: string;
  //   colors: {
  //     body: string;
  //     text: string;
  //     primaryBtn: string;
  //     primaryColor: string;
  //     secondaryColor: string;
  //     thirdColor: string;
  //     fourthColor: string;
  //     fifthColor: string;
  //   };
  // };
  toggleTheme(): void;
}

const Layout: FC<Props> = ({ children, toggleTheme }) => (
  <>
    <Navbar toggleTheme={toggleTheme} />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

export default Layout;

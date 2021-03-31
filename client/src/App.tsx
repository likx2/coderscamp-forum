import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/mainTheme';

const App: FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar>Siema</Navbar>
        <h1>content</h1>
        <h1>content</h1>
        <h1>content</h1>
        <h1>content</h1>
        <h1>content</h1>
        <h1>content</h1>
        <h1>content</h1>
        <Footer />
      </Router>
    </ThemeProvider>
  </>
);

export default App;

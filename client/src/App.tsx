import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/mainTheme';

const App: FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <h1>posts</h1>
          <h1>posts</h1>
          <h1>posts</h1>
        </Layout>
      </Router>
    </ThemeProvider>
  </>
);

export default App;

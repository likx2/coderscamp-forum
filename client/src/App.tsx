import { FC, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts';
import GlobalStyle from './styles/GlobalStyle';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Layout toggleTheme={toggleTheme}>
            <Switch>
              <Route
                component={Posts}
                exact
                path={['/posts/:page', '/posts/ranking/:hashtag/:page']}
              />
              <Route component={PostDetails} exact path="/posts/:page/:id" />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

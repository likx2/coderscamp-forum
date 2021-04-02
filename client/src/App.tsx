import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import { getPosts, Post, postsSelector } from './store/PostSlice';
// import {Post} from './store/PostSlice';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/mainTheme';

const App: FC = () => {
  const dispatch = useDispatch();
  const { posts, loading, errors } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Layout>
            {posts.map((post: Post) => (
              <p>{post.title}</p>
            ))}
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

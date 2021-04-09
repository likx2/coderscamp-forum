import React, { FC, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
// import Layout from './components/Layout';
import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPosts, Post, postsSelector } from './store/PostSlice';
// import {Post} from './store/PostSlice';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/mainTheme';

const App: FC = () => {
  // const dispatch = useDispatch();
  // const { posts, loading, errors } = useSelector(postsSelector);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Layout>
            {/* {posts.map((post: Post) => (
              <p>{post.title}</p>
            ))} */}
            <Switch>
              <Route component={Posts} exact path="/posts/:page" />
              <Route component={PostDetails} exact path="/posts/:page/:id" />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

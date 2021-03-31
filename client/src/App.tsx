import React, { FC, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ExpandedPost from './components/ExpandedPost';
import Posts from './components/Posts';
import PostSample from './components/PostSample';
import './App.scss';
import Post from './types/Post';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={Posts} exact path="/posts" />
        <Route component={ExpandedPost} exact path="/posts/:id" />
      </Switch>
    </Router>
  );
};

export default App;

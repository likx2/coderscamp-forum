import React, { FC } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts';
import './App.scss';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={Posts} exact path="/posts/:page" />
        <Route component={PostDetails} exact path="/posts/:page/:id" />
      </Switch>
    </Router>
  );
};

export default App;

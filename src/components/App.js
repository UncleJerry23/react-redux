import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PostById from '../containers/posts/PostById';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/post/:id" component={PostById} />
      </Switch>
    </Router>
  );
}

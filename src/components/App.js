import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CreatePost from '../containers/posts/CreatePost';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/posts/:id" component={CreatePost} />
      </Switch>
    </Router>
  );
}

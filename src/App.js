import React from "react";
import NavBar from "./components/navbar.component";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllPosts from './components/posts/all-posts.component';
import CreatePost from './components/posts/create-post.component';
import EditPost from './components/posts/edit-post.component';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path='/posts/' exact component= {AllPosts} />
      <Route path='/create-post' component= {CreatePost} />
      <Route path='/posts/edit/:id' component= {EditPost} />
    </Router>
  );
};

export default App;

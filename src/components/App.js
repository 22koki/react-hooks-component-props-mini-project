// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog'; // Import the blog data

function App() {
  return (
    <div>
      <Header name="Your Blog Name" />
      <About about={data.about} />
      <ArticleList posts={data.posts} />
    </div>
  );
}

export default App;

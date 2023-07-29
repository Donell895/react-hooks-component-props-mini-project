// components/ArticleList.js

import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => { // Change 'articles' to 'posts'
  return (
    <main>
      {posts.map((post) => ( // Change 'articles' to 'posts'
        <Article
          key={post.id} // Change 'article.id' to 'post.id'
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;

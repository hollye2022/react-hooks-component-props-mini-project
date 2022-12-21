import React from 'react'
import Article from './Article'

function ArticleList({posts}) {

    const articles=posts.map(post=> <Article key={post.id} date={post.date} title={post.title} preview={post.preview} minutes={post.minutes}/>)

  return (
    <main>
      {articles}  
    </main>
  )
}

export default ArticleList
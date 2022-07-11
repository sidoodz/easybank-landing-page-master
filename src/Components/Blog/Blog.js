import React from 'react';
import './Blog.css';
import data from'../data.json';

const Blog = () => {
    return(
<div className="Blog"  id="blog">
  <div className="blog-container">
      <header>
        <h1>Latest Articles</h1>
        </header>
      
      <div className="articles">
      {
        data.articles.map( article => {
          return(
            <div className="articleBox" key={ article.id }>
            <div className="articleImg">
            <img src={ article.img }/>
          </div>
            
          <div className="articleText">
            <p className="articleBy">{article.author}</p>
            <h4>{article.title}</h4>
            <p className="articlePara">
            {article.content}
            </p>
          </div>
        </div>
         )
         }
         )
         }  
         </div>
         </div>
      </div>
    )
}
export default Blog ;
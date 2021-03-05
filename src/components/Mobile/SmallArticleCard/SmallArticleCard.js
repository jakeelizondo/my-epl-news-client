import React from 'react';

const SmallArticleCard = (props) => {
  return (
    <div className="small-article-card">
      <h4 className="small-article-title">{props.article.title}</h4>
      <div className="small-article-details">
        <p>{props.article.author}</p>
        <p>{props.article.source}</p>
        <p>{props.article.published_at}</p>
      </div>
      <a href={props.article.article_url} target="_blank">
        Go to article
      </a>
    </div>
  );
};

export default SmallArticleCard;

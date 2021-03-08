import React from 'react';
import './LargeArticleCard.css';

const LargeArticleCard = (props) => {
  return (
    <div className="large-article-card">
      <div className="large-article-text">
        <div className="large-article-content">
          <h4 className="large-article-title">{props.article.title}</h4>
          <p>{props.article.description}</p>
        </div>
        <img
          src={props.article.image_url}
          alt={`article-${props.article.id}`}
        />
      </div>
      <div className="large-article-details">
        <div className="large-article-by-text">
          <p className="large-article-author">{props.article.author}</p>
          <p className="large-article-source">{props.article.source}</p>
        </div>
        <div className="large-article-link">
          <a href={props.article.article_url} target="_blank" rel="noreferrer">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default LargeArticleCard;

import React from 'react';
import { format } from 'date-fns';
import './LargeArticleCard.css';

const LargeArticleCard = (props) => {
  let articleDate = format(new Date(props.article.published_at), 'M/d/yy p');

  const generateSaveButton = () => {
    if (props.isSaved) {
      return <div className="large-article-saved">Saved</div>;
    } else {
      return (
        <button
          onClick={() => props.handleArticleSave(props.article.id)}
          className="large-article-save"
        >
          Save
        </button>
      );
    }
  };

  return (
    <div className="large-article-card">
      <div className="large-article-text">
        <div className="large-article-content">
          <h4 className="large-article-title">{props.article.title}</h4>

          <p>{props.article.description}</p>
        </div>
        <div className="large-article-img">
          <img
            src={props.article.image_url}
            alt={`article-${props.article.id}`}
          />
        </div>
      </div>
      <div className="large-article-details">
        <div className="large-article-by-text">
          <p className="large-article-author">{props.article.author}</p>
          <div className="large-article-text">
            <p className="large-article-source">{props.article.source}</p>
            <p className="large-article-published">{`|  ${articleDate}`}</p>
          </div>
        </div>
        <div className="large-article-buttons">
          {props.loggedIn ? generateSaveButton() : null}
          <a
            className="large-article-link"
            href={props.article.article_url}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default LargeArticleCard;

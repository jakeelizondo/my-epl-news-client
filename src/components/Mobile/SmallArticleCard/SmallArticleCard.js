import React from 'react';
import { format } from 'date-fns';
import './SmallArticleCard.css';

const SmallArticleCard = (props) => {
  let articleDate = format(new Date(props.article.published_at), 'M/d/yy p');

  const generateSaveButton = () => {
    if (props.isSaved) {
      return <div className="small-article-saved">Saved</div>;
    } else {
      return (
        <button
          onClick={() => props.handleArticleSave(props.article.id)}
          className="small-article-save"
        >
          Save
        </button>
      );
    }
  };
  return (
    <div className="small-article-card">
      <div className="small-article-heading">
        <img
          src={props.article.image_url}
          alt={`article-${props.article.id}`}
        />
        <div>
          <h4 className="small-article-title">{props.article.title}</h4>
        </div>
      </div>
      <div className="small-article-details">
        <div className="small-article-by-text">
          <p className="small-article-author">{props.article.author}</p>
          <div className="small-article-text">
            <p className="small-article-source">{props.article.source}</p>
            <p className="small-article-published">{`|  ${articleDate}`}</p>
          </div>
        </div>
        <div className="small-article-buttons">
          {props.loggedIn ? generateSaveButton() : null}
          <a
            className="small-article-link"
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

export default SmallArticleCard;

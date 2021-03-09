import React from 'react';
import './SavedArticleCard.css';
import deleteIcon from '../../assets/icons/delete.png';

const SavedArticleCard = (props) => {
  return (
    <div className="saved-article-card">
      <div className="saved-article-heading">
        <div>
          <h4 className="saved-article-title">{props.article.title}</h4>
        </div>
        <img
          src={props.article.image_url}
          alt={`article-${props.article.id}`}
        />
      </div>
      <div className="saved-article-details">
        <div className="saved-article-by-text">
          <p className="saved-article-author">{props.article.author}</p>
          <p className="saved-article-source">{props.article.source}</p>
        </div>
        <div className="saved-article-buttons">
          <button
            onClick={() => props.handleDeleteSaved(props.id)}
            className="saved-article-delete"
          >
            <img src={deleteIcon} alt="delete" />
          </button>
          <a
            className="saved-article-link"
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

export default SavedArticleCard;

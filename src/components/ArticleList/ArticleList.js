import React from 'react';
import './ArticleList.css';

const ArticleList = (props) => {
  return (
    <div className="article-list">
      <div className="pagination-bar">
        {props.atEnd && <p className="no-more">No more articles to show</p>}
        {props.page > 1 && (
          <button onClick={props.handlePrevClick}>Prev</button>
        )}

        {!props.atEnd && <button onClick={props.handleNextClick}>Next</button>}
      </div>
      {props.children}
      <div className="pagination-bar">
        {!props.atEnd && props.page > 1 && (
          <button onClick={props.handlePrevClick}>Prev</button>
        )}
        {!props.atEnd && <button onClick={props.handleNextClick}>Next</button>}
      </div>
    </div>
  );
};

export default ArticleList;

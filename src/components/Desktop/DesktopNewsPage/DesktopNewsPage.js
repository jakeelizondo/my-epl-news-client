import React from 'react';
import ArticleList from '../../ArticleList/ArticleList';
import LargeArticleCard from '../LargeArticleCard/LargeArticleCard';
import TeamFilterSidebar from '../TeamFilterSidebar/TeamFilterSidebar';
import './DesktopNewsPage.css';

const DesktopNewsPage = () => {
  return (
    <div className="desktop-news-page">
      <div className="left-side">
        <TeamFilterSidebar />
      </div>
      <div className="right-side">
        <ArticleList>
          <LargeArticleCard />
        </ArticleList>
      </div>
    </div>
  );
};

export default DesktopNewsPage;

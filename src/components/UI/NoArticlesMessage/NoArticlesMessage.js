import NoNewsIcon from '../../../assets/icons/035-referee-2.png';
import './NoArticlesMessage.css';

function NoArticlesMessage() {
  return (
    <div className="no-articles-message">
      <img src={NoNewsIcon} alt="no-news-icon" />
      <p>Looks like there are no recent articles for this team, sorry!</p>
    </div>
  );
}

export default NoArticlesMessage;

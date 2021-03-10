import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import newsScreenshot from '../../assets/screenshots/epl-news-screenshot.webp';
import savedScreenshot from '../../assets/screenshots/epl-news-saved.webp';
import leagueIcon from '../../assets/icons/019-league.png';
import footballIcon from '../../assets/icons/001-football.png';
import calendarIcon from '../../assets/icons/023-schedule.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="section-1">
        <div className="visit-news">
          <img class="mobile-icon" src={leagueIcon} alt="soccer-tv-icon" />
          <p>
            Stay up to date with your favorite teams, <br />
            no account required.
          </p>
          <Link to="/news">
            <button className="homepage-button">View News</button>
          </Link>
        </div>
        <div className="homepage-screenshot">
          <img src={newsScreenshot} alt="my-epl-news-screenshot" />
        </div>
      </section>
      <section className="section-2">
        <div className="homepage-screenshot">
          <img src={savedScreenshot} alt="my-epl-news-screenshot" />
        </div>
        <div className="save-articles">
          <img
            class="mobile-icon"
            src={calendarIcon}
            alt="soccer-calendar-icon"
          />
          <p>Create an account to save articles for later reading.</p>
          <Link to="/register">
            <button className="homepage-button">Register</button>
          </Link>
        </div>
      </section>
      <section className="section-3">
        <div className="section-3-cta">
          <img class="mobile-icon" src={footballIcon} alt="soccer-ball-icon" />
          <p>
            Sign up today or just hit the news page for the latest EPL updates.
          </p>
          <div className="section-3-buttons">
            <Link to="/news">
              <button className="homepage-button">Get Started</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

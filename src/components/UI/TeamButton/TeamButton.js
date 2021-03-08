import React from 'react';
import './TeamButton.css';

export default function TeamButton(props) {
  return (
    <div
      className={`team-button ${props.isActive ? 'team-button-active' : ''}`}
      onClick={() => props.handleTeamButtonClick(props.team.teamcode)}
    >
      <div className="team-button-name">
        <p>{props.team.teamname}</p>
      </div>
      <div className="team-button-img">
        <img src={props.team.logoUrl} alt={props.team.teamname} />
      </div>
    </div>
  );
}

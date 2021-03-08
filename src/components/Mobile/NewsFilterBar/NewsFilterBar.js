import React, { useState } from 'react';
import { TEAMKEY, TEAMS } from '../../../team-helpers/TEAMS';
import standardBG from '../../../assets/backgrounds/epl-background.png';
import './NewsFilterBar.css';

const NewsFilterBar = (props) => {
  const [filterTeam, setFilterTeam] = useState({});

  let teamBackground = standardBG;
  if (props.team && TEAMKEY[props.team].bgUrl) {
    teamBackground = TEAMKEY[props.team].bgUrl;
  }

  const filterBarStyle = {
    backgroundImage: `url(${teamBackground})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="filter-bar" style={filterBarStyle}>
      <div className="current-team">
        {props.team && <h3>{TEAMKEY[props.team].teamname}</h3>}
        {props.team && props.team !== 'TOT' && (
          <img src={TEAMKEY[props.team].logoUrl} alt={props.team} />
        )}
        {props.team && props.team === 'TOT' && (
          <img src={TEAMKEY[props.team].logoURLWhite} alt={props.team} />
        )}
      </div>
      <div className="filter-options">
        <label htmlFor="filter-bar-team-select">Select Team:</label>

        <div className="filter-inputs">
          <select
            id="filter-bar-team-select"
            name="filter-team"
            value={filterTeam}
            onChange={(e) => setFilterTeam(e.target.value)}
            required
          >
            <option></option>
            {TEAMS.map((team) => (
              <option key={team.teamcode} value={team.teamcode}>
                {team.teamname}
              </option>
            ))}
          </select>
          <button onClick={() => props.handleFilter(filterTeam)}>Filter</button>
        </div>
      </div>
    </div>
  );
};

export default NewsFilterBar;

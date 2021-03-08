import React, { useState } from 'react';
import { TEAMKEY, TEAMS } from '../../../team-helpers/TEAMS';
import './NewsFilterBar.css';

const NewsFilterBar = (props) => {
  const [filterTeam, setFilterTeam] = useState({});
  return (
    <div className="filter-bar">
      <div className="current-team">
        {props.team && <h3>{TEAMKEY[props.team].teamname}</h3>}
        {props.team && (
          <img src={TEAMKEY[props.team].logoUrl} alt={props.team} />
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

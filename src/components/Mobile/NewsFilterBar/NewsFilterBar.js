import React, { useState } from 'react';
import { TEAMS } from '../../../TEAMS';
import './NewsFilterBar.css';

const NewsFilterBar = (props) => {
  const [filterTeam, setFilterTeam] = useState({});
  return (
    <div className="filter-bar">
      <div className="current-team">
        <h3>Current Team: {props.team}</h3>
      </div>
      <div className="filter-options">
        <label>Select Team:</label>
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
  );
};

export default NewsFilterBar;

import React from 'react';
import { TEAMKEY } from '../../../team-helpers/TEAMS';
import TeamButton from '../../UI/TeamButton/TeamButton';
import './TeamFilterSidebar.css';

const TeamFilterSidebar = React.memo((props) => {
  let bgColor = '#e90052';

  if (props.currTeam && TEAMKEY[props.currTeam].bgHex) {
    bgColor = TEAMKEY[props.currTeam].bgHex;
  }

  const sidebarStyle = {
    backgroundColor: bgColor,
  };

  const generateTeamButtons = () => {
    let teamButtons = [];
    for (const key in TEAMKEY) {
      if (props.currTeam !== '' && props.currTeam === key) {
        teamButtons.push(
          <TeamButton
            team={TEAMKEY[key]}
            isActive={true}
            key={key}
            handleTeamButtonClick={props.handleFilter}
          />
        );
      } else {
        teamButtons.push(
          <TeamButton
            team={TEAMKEY[key]}
            key={key}
            handleTeamButtonClick={props.handleFilter}
          />
        );
      }
    }
    return teamButtons;
  };
  return (
    <div className="team-filter-sidebar" style={sidebarStyle}>
      {generateTeamButtons()}
    </div>
  );
});

export default TeamFilterSidebar;

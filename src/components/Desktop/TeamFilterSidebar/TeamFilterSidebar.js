import React from 'react';
import { TEAMKEY } from '../../../team-helpers/TEAMS';
import TeamButton from '../../UI/TeamButton/TeamButton';

const TeamFilterSidebar = React.memo((props) => {
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
  return <div className="team-filter-sidebar">{generateTeamButtons()}</div>;
});

export default TeamFilterSidebar;

import React from 'react';
import ReactDOM from 'react-dom';
import TeamButton from './TeamButton';

describe('TeamButton component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TeamButton
        isActive={false}
        team={{
          teamname: 'Arsenal',
          teamcode: 'ARS',
          logoUrl:
            'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615218544/my_epl_news/team_logos/arsenal-logo_jsn7h3.png',
          bgUrl:
            'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1615222306/my_epl_news/team_backgrounds/background_red_js9tq5.png',
          bgHex: '#DB0007',
        }}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

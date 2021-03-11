import React from 'react';
import ReactDOM from 'react-dom';
import TeamFilterSidebar from './TeamFilterSidebar';

describe('TeamFilterSidebar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TeamFilterSidebar currTeam={'EVE'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

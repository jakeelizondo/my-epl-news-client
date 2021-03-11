import React from 'react';
import ReactDOM from 'react-dom';
import NewsFilterBar from './NewsFilterBar';

describe('NewsFilterBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsFilterBar currTeam={'EVE'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

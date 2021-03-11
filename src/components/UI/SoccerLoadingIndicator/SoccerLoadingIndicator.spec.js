import React from 'react';
import ReactDOM from 'react-dom';
import SoccerLoadingIndicator from './SoccerLoadingIndicator';

describe('SoccerLoadingIndicator component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SoccerLoadingIndicator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import LoadingIndicator from './LoadingIndicator';

describe('LoadingIndicator component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingIndicator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

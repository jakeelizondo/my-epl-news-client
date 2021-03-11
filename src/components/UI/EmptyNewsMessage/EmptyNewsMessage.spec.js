import React from 'react';
import ReactDOM from 'react-dom';
import EmptyNewsMessage from './EmptyNewsMessage';

describe('EmptyNewsMessage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EmptyNewsMessage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

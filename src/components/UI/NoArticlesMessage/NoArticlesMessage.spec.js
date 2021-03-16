import React from 'react';
import ReactDOM from 'react-dom';
import NoArticlesMessage from './NoArticlesMessage';

describe('NoArticlesMessage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoArticlesMessage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

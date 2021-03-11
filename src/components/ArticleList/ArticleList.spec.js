import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArticleList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

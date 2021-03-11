import React from 'react';
import ReactDOM from 'react-dom';
import UserSavedNewsRoute from './UserSavedNewsRoute';
import { BrowserRouter, Route } from 'react-router-dom';

describe('UserSavedNewsRoute component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/saved-news'} component={UserSavedNewsRoute} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

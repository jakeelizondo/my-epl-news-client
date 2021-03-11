import React from 'react';
import ReactDOM from 'react-dom';
import NewsRoute from './NewsRoute';
import { BrowserRouter, Route } from 'react-router-dom';

describe('NewsRoute component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route exact path={'/news'} component={NewsRoute} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

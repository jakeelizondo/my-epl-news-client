import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundRoute from './NotFoundRoute';
import { BrowserRouter, Route } from 'react-router-dom';

describe('NotFoundRoute component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/sdfsadf'} component={NotFoundRoute} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

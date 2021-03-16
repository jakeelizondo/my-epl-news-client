import React from 'react';
import ReactDOM from 'react-dom';
import MyAccountRoute from './MyAccountRoute';
import { BrowserRouter, Route } from 'react-router-dom';

describe('MyAccountRoute component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route exact path={'/news'} component={MyAccountRoute} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

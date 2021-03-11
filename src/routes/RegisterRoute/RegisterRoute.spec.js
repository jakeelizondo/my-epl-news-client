import React from 'react';
import ReactDOM from 'react-dom';
import RegisterRoute from './RegisterRoute';
import { BrowserRouter, Route } from 'react-router-dom';

describe('RegisterRoute component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/register'} component={RegisterRoute} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

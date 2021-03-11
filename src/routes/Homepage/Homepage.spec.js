import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Homepage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route exact path={'/'} component={Homepage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

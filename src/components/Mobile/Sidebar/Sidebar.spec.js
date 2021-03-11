import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Sidebar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/'} component={Sidebar} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

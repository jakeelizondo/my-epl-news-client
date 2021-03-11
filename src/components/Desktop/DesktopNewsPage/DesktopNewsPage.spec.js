import React from 'react';
import ReactDOM from 'react-dom';
import DesktopNewsPage from './DesktopNewsPage';

describe('DesktopNewsPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DesktopNewsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

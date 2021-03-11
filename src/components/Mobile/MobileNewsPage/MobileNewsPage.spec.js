import React from 'react';
import ReactDOM from 'react-dom';
import MobileNewsPage from './MobileNewsPage';

describe('MobileNewsPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MobileNewsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

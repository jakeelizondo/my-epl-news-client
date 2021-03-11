import React from 'react';
import ReactDOM from 'react-dom';
import ErrorModal from './ErrorModal';

describe('ErrorModal component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

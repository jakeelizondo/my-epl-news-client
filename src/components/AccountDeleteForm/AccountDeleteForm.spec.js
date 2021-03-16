import React from 'react';
import ReactDOM from 'react-dom';
import AccountDeleteForm from './AccountDeleteForm';

describe('AccountDeleteForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountDeleteForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

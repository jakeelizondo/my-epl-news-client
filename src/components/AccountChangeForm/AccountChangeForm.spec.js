import React from 'react';
import ReactDOM from 'react-dom';
import AccountChangeForm from './AccountChangeForm';

describe('AccountChangeForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountChangeForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

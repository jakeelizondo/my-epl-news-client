import React from 'react';
import errorIcon from '../../../assets/icons/022-referee-1.png';

import './ErrorModal.css';

const ErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>Oops!</h2>
        <div className="error-message">
          <img src={errorIcon} alt="error" />
          <p>{props.children}</p>
        </div>

        <div className="error-modal__actions">
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;

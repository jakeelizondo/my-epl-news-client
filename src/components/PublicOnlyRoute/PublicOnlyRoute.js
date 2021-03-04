import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) => (
        <UserContext.Consumer>
          {() =>
            TokenService.hasAuthToken() ? (
              <Redirect to={'/news'} />
            ) : (
              <Component {...componentProps} />
            )
          }
        </UserContext.Consumer>
      )}
    />
  );
}

import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RegisterRoute from '../../routes/RegisterRoute/RegisterRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import Homepage from '../../routes/Homepage/Homepage';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import './App.css';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator';

const NewsRoute = React.lazy(() => import('../../routes/NewsRoute/NewsRoute'));
const UserSavedNewsRoute = React.lazy(() =>
  import('../../routes/UserSavedNewsRoute/UserSavedNewsRoute')
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <PublicOnlyRoute exact path={'/'} component={Homepage} />
          <PublicOnlyRoute path={'/register'} component={RegisterRoute} />
          <PublicOnlyRoute path={'/login'} component={LoginRoute} />
          <Suspense fallback={<LoadingIndicator />}>
            <PrivateRoute path={'/saved-news'} component={UserSavedNewsRoute} />
            <Route path={'/news'} component={NewsRoute} />
          </Suspense>
          <Route component={NotFoundRoute} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

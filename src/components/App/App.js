import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Route, Switch, Link } from 'react-router-dom';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import Homepage from '../../routes/Homepage/Homepage';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import SoccerLoadingIndicator from '../UI/SoccerLoadingIndicator/SoccerLoadingIndicator';
import ErrorBoundary from '../../routes/ErrorBoundary/ErrorBoundary';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Sidebar from '../Mobile/Sidebar/Sidebar';

const UserSavedNewsRoute = React.lazy(() =>
  import('../../routes/UserSavedNewsRoute/UserSavedNewsRoute')
);
const NewsRoute = React.lazy(() => import('../../routes/NewsRoute/NewsRoute'));

const MyAccountRoute = React.lazy(() =>
  import('../../routes/MyAccountRoute/MyAccountRoute')
);

const RegisterRoute = React.lazy(() =>
  import('../../routes/RegisterRoute/RegisterRoute')
);

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 767px)' });
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 767px)',
  });
  return (
    <div className="App">
      <ErrorBoundary>
        {isBigScreen && <Header />}
        {isMobileDevice && (
          <React.Fragment>
            <div className="mobile-header">
              <h1>
                <Link to="/">My EPL News</Link>
              </h1>
            </div>
            <div>
              <Sidebar />
            </div>
          </React.Fragment>
        )}

        <main>
          <Suspense fallback={<SoccerLoadingIndicator />}>
            <Switch>
              <PublicOnlyRoute exact path={'/'} component={Homepage} />
              <PublicOnlyRoute path={'/register'} component={RegisterRoute} />
              <PublicOnlyRoute path={'/login'} component={LoginRoute} />
              <Route path={'/news'} component={NewsRoute} />
              <PrivateRoute path={'/account'} component={MyAccountRoute} />
              <PrivateRoute
                path={'/saved-news'}
                component={UserSavedNewsRoute}
              />
              <Route component={NotFoundRoute} />
            </Switch>
          </Suspense>
        </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;

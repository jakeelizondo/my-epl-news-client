import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Route, Switch, Link } from 'react-router-dom';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RegisterRoute from '../../routes/RegisterRoute/RegisterRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import Homepage from '../../routes/Homepage/Homepage';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
// import NewsRoute from '../../routes/NewsRoute/NewsRoute';
import SoccerLoadingIndicator from '../UI/SoccerLoadingIndicator/SoccerLoadingIndicator';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Sidebar from '../Mobile/Sidebar/Sidebar';

const UserSavedNewsRoute = React.lazy(() =>
  import('../../routes/UserSavedNewsRoute/UserSavedNewsRoute')
);
const NewsRoute = React.lazy(() => import('../../routes/NewsRoute/NewsRoute'));

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 767px)' });
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 767px)',
  });
  return (
    <div className="App">
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
        <Switch>
          <PublicOnlyRoute exact path={'/'} component={Homepage} />
          <PublicOnlyRoute path={'/register'} component={RegisterRoute} />
          <PublicOnlyRoute path={'/login'} component={LoginRoute} />
          <Suspense fallback={<SoccerLoadingIndicator />}>
            <Route path={'/news'} component={NewsRoute} />
            <PrivateRoute path={'/saved-news'} component={UserSavedNewsRoute} />
          </Suspense>
          <Route component={NotFoundRoute} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

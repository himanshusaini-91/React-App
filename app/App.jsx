import React from 'react';

import createHistory from 'history/createBrowserHistory';
import { Provider as ReduxProvider } from 'react-redux';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';

import React from 'react';

import createHistory from 'history/createBrowserHistory';
import { Provider as ReduxProvider } from 'react-redux';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';

import ArticleRoutes from 'Component/accounts/Routes';
import 'styles/index.global.scss';

const store = configureStore(
  // Server side rendering would have mounted our state on this global.
  window.__APP_STATE__, // eslint-disable-line no-underscore-dangle
);
const history = createHistory();

const App = () => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <section className="container-fluid">
        <Switch>
          <Route path="/" component={ArticleRoutes} />
        </Switch>
      </section>
    </ConnectedRouter>
  </ReduxProvider>
);

export default App;

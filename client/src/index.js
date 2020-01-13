import React from 'react';
import {hydrate} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createMemoryHistory';

import reducers from './__reducers/index';
import App from './app';
import middlewares from './__middlewares/index';


/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
 */
const initialState = window.__INITIAL_STATE__; // eslint-disable-line

// eslint-disable-next-line no-underscore-dangle
delete window.__INITIAL_STATE__;

const history = createHistory();
const store = createStore(reducers(history), initialState, middlewares(history));


/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
const render = (Component) => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}

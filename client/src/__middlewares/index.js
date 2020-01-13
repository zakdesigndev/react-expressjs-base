import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

const loggerMiddleware = createLogger();
export default (history) => composeWithDevTools(
  applyMiddleware(
    loggerMiddleware,
    routerMiddleware(history),
  ),
);

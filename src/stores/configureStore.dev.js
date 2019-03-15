import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createLogger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import history from '../services/browserHistory';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const myRouterMiddleware = routerMiddleware(history);
  const middleware = [myRouterMiddleware, sagaMiddleware, createLogger()];
  const store = createStore(rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  module.hot.accept('../reducers', () => {
    store.replaceReducer(rootReducer);
  });
  store.close = () => store.dispatch(END);
  return store;
}

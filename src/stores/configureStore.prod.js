import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware, { END } from 'redux-saga';
import history from '../services/browserHistory';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const myRouterMiddleware = routerMiddleware(history);
  const middleware = [myRouterMiddleware, sagaMiddleware];
  const store = createStore(rootReducer(history), initialState, applyMiddleware(...middleware));

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
}

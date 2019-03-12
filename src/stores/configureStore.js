import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga'

import history from './browserHistory';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()
    const myRouterMiddleware = routerMiddleware(history);
    const initialState = {};
    const middleware = [myRouterMiddleware, sagaMiddleware];
    const store = createStore(rootReducer(history),
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => {
            // eslint-disable-next-line
            // const nextReducer = require('../reducers').default;
            store.replaceReducer(rootReducer);
        });
    }
    
    return store;
}
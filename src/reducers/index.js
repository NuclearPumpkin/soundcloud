
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import browse from './browse';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  browse
});

export default rootReducer;

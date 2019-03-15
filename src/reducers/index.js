
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import browse from './browse';
import request from './request';
import paginate from './paginate';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  browse,
  request,
  paginate,
});

export default rootReducer;


import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'


export default rootReducer = (history) => combineReducers({
    router: connectRouter(history),
  })
  

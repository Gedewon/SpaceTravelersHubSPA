import {applyMiddleware,combineReducers,creteStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({});

const store = creteStore(
  reducer,
  applyMiddleware(thunk, logger),
)

export default store;
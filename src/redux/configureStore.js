import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer,
  rocketsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;

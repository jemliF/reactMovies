import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import movieReducer from './reducers/movieReducer';
import actorReducer from './reducers/actorReducer';
import commonReducer from './reducers/commonReducer';
export default createStore(combineReducers(
    {
        movieReducer,
        actorReducer,
        commonReducer
    }
), {}, applyMiddleware(logger, thunk, promise()));
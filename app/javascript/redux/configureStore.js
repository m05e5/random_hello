import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import greetingReducer from "./greetingReducer";


const reducer = combineReducers({
  greetings: greetingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
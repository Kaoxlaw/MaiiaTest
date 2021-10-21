import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import titlesReducer from "./reducers";

const rootReducer = combineReducers({ titlesReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

import { questionsStore } from "./QuestionsStore/store";
import * as questionsReducers from "./QuestionsStore/reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const initialState = {
  ...questionsStore
};

const reducers = {
  ...questionsReducers
};

const rootReducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const getStore = () => {
  const store = createStore(rootReducer, initialState);
  return store;
};

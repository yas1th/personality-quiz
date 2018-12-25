import { questionsStore } from "./QuestionsStore/store";
import * as questionsReducers from "./QuestionsStore/reducers";
import { questionsSagas } from "./QuestionsStore/sagas";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

const initialState = {
  ...questionsStore
};

const reducers = {
  ...questionsReducers
};

const rootReducer = combineReducers(reducers);

function* rootSaga() {
  yield all([...questionsSagas]);
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const getStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

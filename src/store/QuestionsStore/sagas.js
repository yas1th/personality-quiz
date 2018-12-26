import { call, put, takeEvery } from "redux-saga/effects";
import { personalityTestActions } from "./actions";
import { API } from "../../Services/Api";

function* watchPersonalityTestQuestions() {
  yield takeEvery(
    personalityTestActions.FETCH_QUESTIONS,
    getPersonalityTestQuestions
  );
}

function* getPersonalityTestQuestions(action) {
  try {
    const response = yield call(API.get, `questions`);
    yield put({
      type: personalityTestActions.FETCH_QUESTIONS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: personalityTestActions.FETCH_QUESTIONS_ERROR,
      payload: error
    });
  }
}

function* watchPersonalityTestCtegories() {
  yield takeEvery(
    personalityTestActions.FETCH_CATEGORIES,
    getPersonalityTestCategories
  );
}

function* getPersonalityTestCategories(action) {
  try {
    const response = yield call(API.get, `categories`);
    yield put({
      type: personalityTestActions.FETCH_CATEGORIES_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: personalityTestActions.FETCH_CATEGORIES_ERROR,
      payload: error
    });
  }
}

export const questionsSagas = [
  watchPersonalityTestQuestions(),
  watchPersonalityTestCtegories()
];

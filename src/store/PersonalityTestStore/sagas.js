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

function* watchSaveAnswers() {
  yield takeEvery(personalityTestActions.UPDATE_ANSWERS, saveAnswers);
}

function* saveAnswers(action) {
  try {
    const response = yield call(API.post, `answers`, action.payload);
    yield put({
      type: personalityTestActions.UPDATE_ANSWERS_SUCCESS,
      payload: response
    });
  } catch (error) {
    yield put({
      type: personalityTestActions.UPDATE_ANSWERS_ERROR,
      payload: "SOMETHING WENT WRONG PLEASE TRY AGAIN LATER!!"
    });
  }
}

export const questionsSagas = [
  watchPersonalityTestQuestions(),
  watchPersonalityTestCtegories(),
  watchSaveAnswers()
];

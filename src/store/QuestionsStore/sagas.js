import { call, put, takeEvery } from "redux-saga/effects";
import { questionsActions } from "./actions";
import { API } from "../../Services/Api";

function* watchPersonalityQuizQuestions() {
  yield takeEvery(
    questionsActions.FETCH_QUESTIONS,
    getPersonalityQuizQuestions
  );
}

function* getPersonalityQuizQuestions(action) {
  try {
    const response = yield call(API.get, `questions`);
    yield put({
      type: questionsActions.FETCH_QUESTIONS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({ type: questionsActions.FETCH_QUESTIONS_ERROR, payload: error });
  }
}

export const questionsSagas = [watchPersonalityQuizQuestions()];

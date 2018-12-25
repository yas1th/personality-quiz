export const questionsActions = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  FETCH_QUESTIONS_SUCCESS: "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_ERROR: "FETCH_QUESTIONS_ERROR"
};

export const questionActionCreators = {
  fetchQuestions: () => ({ type: questionsActions.FETCH_QUESTIONS }),
  fetchQuestionsSuccess: data => ({
    type: questionsActions.FETCH_QUESTIONS_SUCCESS,
    payload: data
  }),
  fetchQuestionsError: data => ({
    type: questionsActions.FETCH_QUESTIONS_ERROR,
    payload: data
  })
};

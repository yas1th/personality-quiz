export const personalityTestActions = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  FETCH_QUESTIONS_SUCCESS: "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_ERROR: "FETCH_QUESTIONS_ERROR",
  FETCH_CATEGORIES: "FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_ERROR: "FETCH_CATEGORIES_ERROR",
  UPDATE_ANSWER: "UPDATE_ANSWER",
  UPDATE_ANSWERS: "UPDATE_ANSWERS",
  UPDATE_ANSWERS_SUCCESS: "UPDATE_ANSWER_SUCCESS",
  UPDATE_ANSWERS_ERROR: "UPDATE_ANSWER_ERROR",
  UPDATE_CURRENT_CATEGORY_INDEX: "UPDATE_CURRENT_CATEGORY_QUESTION_INDEX"
};

export const personalityTestActionCreators = {
  fetchQuestions: () => ({ type: personalityTestActions.FETCH_QUESTIONS }),
  fetchQuestionsSuccess: data => ({
    type: personalityTestActions.FETCH_QUESTIONS_SUCCESS,
    payload: data
  }),
  fetchQuestionsError: data => ({
    type: personalityTestActions.FETCH_QUESTIONS_ERROR,
    payload: data
  }),
  fetchCategories: () => ({ type: personalityTestActions.FETCH_CATEGORIES }),
  fetchCategoriesSuccess: data => ({
    type: personalityTestActions.FETCH_CATEGORIES_SUCCESS,
    payload: data
  }),
  fetchCategoriesError: data => ({
    type: personalityTestActions.FETCH_CATEGORIES_ERROR,
    payload: data
  }),
  updateAnswer: data => ({
    type: personalityTestActions.UPDATE_ANSWER,
    payload: data
  }),
  updateCurrentCategoryQuestionIndex: data => ({
    type: personalityTestActions.UPDATE_CURRENT_CATEGORY_INDEX,
    payload: data
  }),
  updateAnswers: data => ({
    type: personalityTestActions.UPDATE_ANSWERS,
    payload: data
  })
};

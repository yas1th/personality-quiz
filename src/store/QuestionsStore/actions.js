export const personalityTestActions = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  FETCH_QUESTIONS_SUCCESS: "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_ERROR: "FETCH_QUESTIONS_ERROR",
  FETCH_CATEGORIES: "FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_ERROR: "FETCH_CATEGORIES_ERROR"
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
  })
};

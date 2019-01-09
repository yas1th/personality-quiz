import { personalityTestActions } from "./actions";

export const questions = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case personalityTestActions.FETCH_QUESTIONS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export const categories = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case personalityTestActions.FETCH_CATEGORIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export const answers = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case personalityTestActions.UPDATE_ANSWER: {
      return [...state, payload];
    }

    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case personalityTestActions.FETCH_QUESTIONS:
      return true;
    case personalityTestActions.FETCH_QUESTIONS_SUCCESS:
      return false;
    case personalityTestActions.FETCH_QUESTIONS_ERROR:
      return false;
    default:
      return state;
  }
};

export const categoryCurrentQuestionIndex = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case personalityTestActions.UPDATE_CURRENT_CATEGORY_INDEX: {
      const newstate = { ...state };
      newstate[payload.categoryName] = payload.questionNum;
      return newstate;
    }
    default:
      return state;
  }
};

export const isTestCompleted = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case personalityTestActions.UPDATE_ANSWERS_SUCCESS:
      return true;
    case personalityTestActions.UPDATE_ANSWERS_ERROR:
      return false;
    default:
      return state;
  }
};

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

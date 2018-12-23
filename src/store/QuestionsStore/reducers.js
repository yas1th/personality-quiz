import {questionsActions} from './actions';

export const quizData = (state={}, action) => {
    const {type, payload} = action;
    switch(type) {
        case questionsActions.FETCH_QUESTIONS_SUCCESS:
            return payload;
        default:
            return state;
    }
}

export const isLoading = (state = false, action) => {
    const {type, payload} = action;
    switch(type) {
        case questionsActions.FETCH_QUESTIONS:
            return true;
        case questionsActions.FETCH_QUESTIONS_SUCCESS:
            return false;
        case questionsActions.FETCH_QUESTIONS_ERROR:
            return false;
        default:
            return state;
    }
}
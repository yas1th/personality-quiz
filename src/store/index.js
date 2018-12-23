import {questionsStore} from './QuestionsStore/store';
import * as questionsReducers from './QuestionsStore/reducers';

const initialState = {
    ...questionsStore
}

const reducers = {
    ...questionsReducers
}
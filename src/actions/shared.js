import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api';
import { receiveUsers, addUserAnswer, addUserQuestion } from './users';
import { receiveQuestions, addQuestionAnswer, addQuestion } from './questions';

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      })
  }
}

export function handleAddQuestionAnswer (info) {
  return (dispatch) => {
    dispatch(addQuestionAnswer(info))
    dispatch(addUserAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAddQuestionAnswer: ', e)
      })
  }
}

export function handleAddQuestion  (info) {
  return (dispatch) => {
    return saveQuestion(info)
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      })
  }
}

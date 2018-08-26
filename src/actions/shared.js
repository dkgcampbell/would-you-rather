import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, addUserAnswer } from './users';
import { receiveQuestions, addQuestionAnswer } from './questions';

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

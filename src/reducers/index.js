import { combineReducers } from 'redux'
import authedUserId from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
  authedUserId,
  users,
  questions
})
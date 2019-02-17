
import { combineReducers } from 'redux'

import questions from './reducers/questionsReducer'
import auth from './reducers/authReducer'

export default combineReducers({
  auth,
  questions
})


import { combineReducers } from 'redux'
import DynamicRedux from 'helpers/dynamicRedux'
import auth from './reducers/authReducer'

const quizes = new DynamicRedux('quiz')
const users = new DynamicRedux('user')
const records = new DynamicRedux('record')
const results = new DynamicRedux('result')
const questions = new DynamicRedux('question')

export default combineReducers({
  auth,
  quizes: quizes.reducer,
  users: users.reducer,
  records: records.reducer,
  results: results.reducer,
  questions: questions.reducer
})

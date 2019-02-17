
import { combineReducers } from 'redux'
import DynamicRedux from 'helpers/dynamicRedux'
import auth from './reducers/authReducer'

const quizes = new DynamicRedux('quizes')
const users = new DynamicRedux('users')
const records = new DynamicRedux('records')
const results = new DynamicRedux('results')
const questions = new DynamicRedux('questions')

export default combineReducers({
  auth,
  quizes: quizes.reducer,
  users: users.reducer,
  records: records.reducer,
  results: results.reducer,
  questions: questions.reducer
})

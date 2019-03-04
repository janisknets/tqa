import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from 'modules/home'
import Quizes from 'modules/quizesList'
import Quiz from 'modules/quiz'
import Question from 'modules/question'
import Questions from 'modules/questionsList'

class ProtectedRouter extends React.Component {
  render () {
    return <Switch>
      <Route path='/home' component={Home} />
      <Route path='/quizzes/:quizId/questions/create' component={Question} />
      <Route path='/quizzes/:quizId/questions/:questionId' component={Question} />
      <Route path='/quizzes/:quizId/questions' component={Questions} />
      <Route path='/quizzes/create' component={Quiz} />
      <Route path='/quizzes/:quizId' component={Quiz} />
      <Route path='/quizzes' component={Quizes} />
      <Route path="/*" component={Home} />
    </Switch>
  }
}

export default ProtectedRouter

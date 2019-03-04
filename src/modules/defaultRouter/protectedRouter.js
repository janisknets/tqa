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
      <Route path='/quizzes/:quizId/edit/questions/create' component={Question} />
      <Route path='/quizzes/:quizId/edit/questions/:questionId' component={Question} />
      <Route path='/quizzes/:quizId/edit/questions' component={Questions} />
      <Route path='/quizzes/create' component={Quiz} />
      <Route path='/quizzes/:quizId/edit' component={Quiz} />
      <Route path='/quizzes' component={Quizes} />
      <Route path="/*" component={Home} />
    </Switch>
  }
}

export default ProtectedRouter

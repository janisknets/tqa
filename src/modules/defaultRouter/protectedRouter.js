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
      <Route path='/quizes/:quizId/questions/create' component={Question} />
      <Route path='/quizes/:quizId/questions/:questionId' component={Question} />
      <Route path='/quizes/:quizId/questions' component={Questions} />
      <Route path='/quizes/create' component={Quiz} />
      <Route path='/quizes/:quizId' component={Quiz} />
      <Route path='/quizes' component={Quizes} />
      <Route path="/*" component={Home} />
    </Switch>
  }
}

export default ProtectedRouter

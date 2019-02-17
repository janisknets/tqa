import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const QuizComponent = ({quiz}) => <div>
  <h2>{quiz.name} ({quiz.questionIds.length()})</h2>
</div>

const QuizListComponent = ({quizes}) => <div>
  <div><Link to='/quiz/create'><Button>Add new Quiz</Button></Link></div>
  {
    quizes.map((quiz,i) => <QuizComponent quiz={quiz} key={`quiz-${i}`}/> )
  }
</div>

export default QuizListComponent

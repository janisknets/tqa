import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'antd'

const QuizComponent = ({quiz}) => <Card
    title={quiz.name}
    extra={<React.Fragment>
      <Link to={`/quizzes/${quiz._id}/edit`}><Button>Edit</Button></Link>
      <Link to={`/quizzes/${quiz._id}/edit/questions`}><Button>Questions ({quiz.questions && quiz.questions.length})</Button></Link>
    </React.Fragment>}
  >
  <p>{quiz.description}</p>
</Card>

const QuizListComponent = ({quizzes = []}) => <div>
  <div><Link to='/quizzes/create'><Button>Add new Quiz</Button></Link></div>
  {
    quizzes.map((quiz,i) => <QuizComponent quiz={quiz} key={`quiz-${i}`}/> )
  }
</div>

export default QuizListComponent

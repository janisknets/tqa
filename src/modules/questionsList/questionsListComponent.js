import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'antd'

const QuestionComponent = ({quizId, question}) => <Card
    title={question.question}
    extra={<Link to={`/quizes/${quizId}/questions/${question._id}`}>Edit </Link>}
  >
  {question.answers.map( answer => <p>{answer}</p>)};
</Card>

const QuestionsListComponent = ({questions, quizId}) => <div>
  <div><Link to={`/quizes/${quizId}/questions/create`} ><Button>Add new Question</Button></Link></div>
  {
    questions.map((question,i) => <QuestionComponent quizId={quizId} question={question} key={`question-${i}`}/> )
  }
</div>

export default QuestionsListComponent

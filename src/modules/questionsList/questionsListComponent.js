import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'antd'

const QuestionComponent = ({quizId, question, onClickDelete}) => <Card
    title={question.question}
    extra={<React.Fragment>
        <Link to={`/quizes/${quizId}/questions/${question._id}`}><Button>Edit</Button></Link>
        <Button type='danger' onClick={() => onClickDelete(question._id)} >Delete</Button>
      </React.Fragment>}
  >
  {question && question.answers && question.answers.map((answer, i) => <span key={`answer-${question._id}-${i}`}>{answer}</span>)};
</Card>

const QuestionsListComponent = ({questions = [], quizId, onClickDelete}) => <div>
  <div><Link to={`/quizes/${quizId}/questions/create`} ><Button>Add new Question</Button></Link></div>
  {
    questions.map((question,i) => <QuestionComponent quizId={quizId} onClickDelete={onClickDelete} question={question} key={`question-${i}`}/> )
  }
</div>

export default QuestionsListComponent

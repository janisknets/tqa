import React from 'react'
import { connect } from 'react-redux'

import { getQuestions, deleteQuestion } from 'redux/actions/questionsActions'

import QuestionsListComponent from './questionsListComponent'

class QuestionsListContainer extends React.Component {
  componentDidMount() {
    this.props.getQuestions()
  }

  onClickDelete = (questionId) => {
    this.props.deleteQuestion(questionId)
  }

  render () {
    return <QuestionsListComponent quizId={this.props.match.params.quizId} onClickDelete={this.onClickDelete} questions={this.props.questions} />
  }
}

const mapDisptachToProps = dispatch => {
  return {
    getQuestions: () => dispatch(getQuestions()),
    deleteQuestion: (id) => dispatch(deleteQuestion(id))
  }
}

const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions.values)
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(QuestionsListContainer)

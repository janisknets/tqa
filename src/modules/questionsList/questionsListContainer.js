import React from 'react'
import { connect } from 'react-redux'

import { getQuestions } from 'redux/actions/questionsActions'

import QuestionsListComponent from './questionsListComponent'

class QuestionsListContainer extends React.Component {
  componentDidMount() {
    console.log('debug')
    this.props.getQuestions()
  }
  render () {
    return <QuestionsListComponent quizId={this.props.match.params.quizId} questions={this.props.questions} />
  }
}

const mapDisptachToProps = dispatch => {
  return {
    getQuestions: () => dispatch(getQuestions())
  }
}

const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions.values)
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(QuestionsListContainer)

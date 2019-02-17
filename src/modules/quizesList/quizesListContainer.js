import React from 'react'
import { connect } from 'react-redux'

import { getQuizes } from 'redux/actions/quizesActions'

import QuizListComponent from './quizesListComponent'

class QuizListContainer extends React.Component {
  componentDidMount() {
    this.props.getQuizes()
  }
  render () {
    return <QuizListComponent quizes={this.props.quizes} />
  }
}

const mapDisptachToProps = dispatch => {
  return {
    getQuizes: () => dispatch(getQuizes())
  }
}

const mapStateToProps = state => {
  return {
    quizes: Object.values(state.quizes.values)
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(QuizListContainer)

import React from 'react'

import AnswersListComponent from './AnswersListComponent'


class AnswersListContainer extends React.Component {
  state = {
    answers: [],
    correct: []
  }

  addAnswer = () => {
    let answers = [...this.state.answers]
    answers[answers.length] = answers.length
    this.setState({answers})
  }

  removeAnswer = (index) => {
    let answers = this.state.answers.splice(index, 1)
    this.setState({answers})
  }

  render() {
    return <AnswersListComponent
      answers={this.state.answers}
      setCorrect={this.setCorrect}
      addAnswer={this.addAnswer}
      onInputChage={this.onInputChage}
      removeAnswer={this.removeAnswer}
      type={this.props.type}
      form={this.props.form} />
  }
}

export default AnswersListContainer

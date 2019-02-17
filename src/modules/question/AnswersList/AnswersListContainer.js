import React from 'react'

import AnswersListComponent from './AnswersListComponent'


class AnswersListContainer extends React.Component {
  state = {
    answers: [],
    correct: []
  }

  addAnswer = () => {
    let answers = [...this.state.answers]
    answers.push('')
    this.setState({answers})
  }

  removeAnswer = (index) => {
    let answers = this.state.answers.splice(index, 1)
    this.setState({answers})
  }

  toggleCorrect = (index) => {
    switch (this.props.type) {
      case 'checkbox':
        const pos = this.state.correct.indexOf(index)
        if ( pos < 0 ){
          this.setState({correct: [...this.state.correct, index]})
          return
        }
        let correct = [...this.state.correct]
        correct[pos] = !correct[pos]
        this.setState({correct})
        return
      case 'radio':
        this.setState({correct: [index]})
        return
      case 'input':
      case 'textarea':
      default:
        this.setState({correct: [this.state.answers[index]]})
    }
  }

  render() {
    return <AnswersListComponent
      correct={this.state.correct}
      answers={this.state.answers}
      setCorrect={this.setCorrect}
      addAnswer={this.addAnswer}
      onInputChage={this.onInputChage}
      removeAnswer={this.removeAnswer}
      type />
  }
}

export default AnswersListContainer

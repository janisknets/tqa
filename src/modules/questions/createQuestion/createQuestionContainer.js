import React, { Component } from 'react'
import CreateQuestionComponent from './CreateQuestionComponent'

class CreateQuestion extends Component {

  addAnswer = (e) => {
    e.preventDefault()
    let answers = this.state.answers.map(item => ({ ...item }));
    answers.push('a')
    this.setState({answers})
  }

  render () {
    return <CreateQuestionComponent addAnswer={this.addAnswer} />
  }
}

export default CreateQuestion

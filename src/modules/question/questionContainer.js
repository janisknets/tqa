import React from 'react'
import { connect } from 'react-redux'
import { postQuestion, getQuestion, patchQuestion } from 'redux/actions/questionsActions'
import QuestionComponent from './questionComponent'

class CreateQuestion extends React.Component {
  state = {
    type: 'input'
  }
  onSubmit = ((e, form) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (err) {
        console.error(err)
        return
      }

      let correct = values.correctRadio || values.correctRadio === 0
        ? [values.correctRadio]
        : values.correctCheckbox || null

      const payload = {
        question: values.question,
        answewrs: Object.keys(values).filter(x => /answers*/.exec(x)).map(x => values[x]),
        correct,
        type: values.type,
        area: values.area,
        complexity: values.complexity
      }
      // if (this.props.match.params.questionId) {
      //   this.props.patchQuestion(this.props.match.params.questionId, values)
      //     .then((res) => {
      //       this.props.history.push(`/question/${res.value.data._id}/questions`)
      //     })
      //   return;
      // }

      this.props.postQuestion(payload)
        .then((res) => {
          this.props.patchQuiz(this.props.params.quizId)
          this.props.history.push(`/quizes/${this.props.params.quizId}/questions/${res.value.data._id}`)
        })
    })
  })

  onTypeChange = (e) => {
    this.setState({type: e.target.value})
  }

  componentDidMount() {
    this.props.match.params.questionId && this.props.getQuestion(this.props.match.params.questionId)
  }
  render () {
    const question = this.props.questions[this.props.match.params.questionId]
    return <QuestionComponent onSubmit={this.onSubmit} onTypeChange={this.onTypeChange} question={question} type={this.state.type} />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postQuestion: (payload) => dispatch(postQuestion(payload)),
    getQuestion: (payload) => dispatch(getQuestion(payload)),
    patchQuestion: (id, payload) => dispatch(patchQuestion(id, payload))
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.values
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion)

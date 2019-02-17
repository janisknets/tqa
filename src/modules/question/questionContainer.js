import React from 'react'
import { connect } from 'react-redux'
import { postQuestion, getQuestion, patchQuestion } from 'redux/actions/questionsActions'
import QuestionComponent from './questionComponent'

class CreateQuestion extends React.Component {
  onSubmit = ((e, form) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (err) {
        console.error(err)
        return
      }

      console.log(values)
      return
      // if (this.props.match.params.questionId) {
      //   this.props.patchQuestion(this.props.match.params.questionId, values)
      //     .then((res) => {
      //       this.props.history.push(`/question/${res.value.data._id}/questions`)
      //     })
      //   return;
      // }

      // this.props.postQuestion(values)
      //   .then((res) => {
      //     this.props.history.push(`/question/${res.value.data._id}/questions`)
      //   })
    })
  })
  componentDidMount() {
    this.props.match.params.questionId && this.props.getQuestion(this.props.match.params.questionId)
  }
  render () {
    const question = this.props.questions[this.props.match.params.questionId]
    return <QuestionComponent onSubmit={this.onSubmit} question={question} />
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

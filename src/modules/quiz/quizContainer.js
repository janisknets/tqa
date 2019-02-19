import React from 'react'
import { connect } from 'react-redux'
import { postQuiz, getQuiz, patchQuiz } from 'redux/actions/quizesActions'
import QuizComponent from './quizComponent'

class CreateQuiz extends React.Component {
  onSubmit = ((e, form) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (err) {
        console.error(err)
        return
      }
      if (this.props.match.params.quizId) {
        this.props.patchQuiz(this.props.match.params.quizId, values)
          .then((res) => {
            this.props.history.push(`/quiz/${res.value.data._id}/questions`)
          })
        return;
      }

      this.props.postQuiz(values)
        .then((res) => {
          this.props.history.push(`/quiz/${res.value.data._id}/questions/create`)
        })
    })
  })
  componentDidMount() {
    this.props.match.params.quizId && this.props.getQuiz(this.props.match.params.quizId)
  }
  render () {
    const quiz = this.props.quizes[this.props.match.params.quizId]
    return <QuizComponent onSubmit={this.onSubmit} quiz={quiz} />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postQuiz: (payload) => dispatch(postQuiz(payload)),
    getQuiz: (payload) => dispatch(getQuiz(payload)),
    patchQuiz: (id, payload) => dispatch(patchQuiz(id, payload))
  }
}

const mapStateToProps = state => {
  return {
    quizes: state.quizes.values
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz)

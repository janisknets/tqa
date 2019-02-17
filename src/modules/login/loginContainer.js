import React from 'react'
import { connect } from 'react-redux';

import { login } from 'redux/actions/authActions'
import LoginComponent from './loginComponent'

class LoginContainer extends React.Component {
  onSubmit = async (e, form) => {
    e.preventDefault()
    await form.validateFields(async (err, values) => {
      if (err) {
        return
      }
      try {
        this.props.login(values.username, values.password)
          .then(() => this.props.history.push('/home'))
      } catch (error) {
        this.setState({error: error})
      }
    })
  }
  render () {
    return <LoginComponent onSubmit={this.onSubmit} error={this.props.error} />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.working,
    error: state.auth.err
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

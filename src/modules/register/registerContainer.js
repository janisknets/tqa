import React from 'react'
import { connect } from 'react-redux';

import { register } from 'redux/actions/authActions'
import RegisterComponent from './registerComponent'

class RegisterContainer extends React.Component {
  onSubmit = async (e, form) => {
    e.preventDefault()
    await form.validateFields(async (err, values) => {
      if (err) {
        return
      }
      try {
        console.log(values)
        this.props.register(values)
          .then(() => this.props.history.push('/login'))
      } catch (error) {
        this.setState({error: error})
      }
    })
  }
  render () {
    return <RegisterComponent onSubmit={this.onSubmit} error={this.props.error} />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (data) => dispatch(register(data))
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth.working,
    error: state.auth.err
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)

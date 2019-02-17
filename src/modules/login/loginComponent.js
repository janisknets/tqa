import React from 'react'
import { Form, Input, Button, Alert } from 'antd'


class LoginComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {

    return state
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return <Form onSubmit={(e) => this.props.onSubmit(e, this.props.form)} >
      {this.props.error && <Alert type="error" message={this.props.error}/>}
      <Form.Item label='Username'>{
        getFieldDecorator('username', {
          required: true
        })(
          <Input label='Username' />
        )
      }
      </Form.Item>
      <Form.Item label='Password'>{
        getFieldDecorator('password', {
          required: true
        })(
          <Input label='Password' />
        )
      }
      </Form.Item>
      <Button type='primary' htmlType='submit' >Login</Button>
    </Form>
  }
}

export default Form.create({name: 'LoginComponent'})(LoginComponent)

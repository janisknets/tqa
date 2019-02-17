import React from 'react'
import { Input, Form } from 'antd'

class DecoratedInput extends React.Component {
  render () {
    const { getFieldDecorator } = this.props.form
    return <Form.Item label={this.props.label}>{
      getFieldDecorator(this.props.name, {
        required: true,
        initialValue: this.props.initialValue || undefined
      })(
        <Input />
      )
    }</Form.Item>
  }
}

export default DecoratedInput

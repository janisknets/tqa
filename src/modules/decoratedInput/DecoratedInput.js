import React from 'react'
import { Input, Form, Radio, Checkbox } from 'antd'

class DecoratedInput extends React.Component {
  getInputType = () => {
    switch (this.props.type) {
      case 'checkbox':
        return <Checkbox.Group options={this.props.options} />
      case 'radio':
        return <Radio.Group options={this.props.options} />
      case 'textarea':
        return <Input.TextArea />
      case 'input':
      default:
        return <Input />
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return <Form.Item label={this.props.label}>{
      getFieldDecorator(this.props.name, {
        required: true,
        initialValue: this.props.value || undefined
      })(this.getInputType())
    }</Form.Item>
  }
}

export default DecoratedInput

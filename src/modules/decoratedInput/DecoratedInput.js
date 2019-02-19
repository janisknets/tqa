import React from 'react'
import { Input, Form, Radio, Checkbox } from 'antd'

class DecoratedInput extends React.Component {
  getInputType = () => {
    if (this.props.render) {
      return this.props.render(this.props.type, this.props.form, this.props.options)
    }

    switch (this.props.type) {
      case 'checkbox':
        return <Checkbox.Group options={this.props.options} onChange={this.props.onChange} />
      case 'radio':
        return <Radio.Group options={this.props.options} onChange={this.props.onChange} />
      case 'textarea':
        return <Input.TextArea onChange={this.props.onChange} />
      case 'input':
      default:
        return <Input onChange={this.props.onChange} />
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

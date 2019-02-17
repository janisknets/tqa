import React from 'react'
import { Row, Col, Form, Button, Alert } from 'antd'

import DecoratedInput from 'modules/decoratedInput'

class QuestionComponent extends React.Component {
  render () {
    const question = this.props.question || {}
    return <Form onSubmit={(e) => this.props.onSubmit(e, this.props.form)} >
      {this.props.error && <Alert type="error" message={this.props.error}/>}
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Question' name='question' value={question.question} />
        </Col>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Type' name='type' type='radio' options={['input', 'textarea', 'checkbox', 'radio']} />
        </Col>
      </Row>
      <Row>
        <Col offset={11} span={4} >
          <Button type='primary' htmlType='submit' >{this.props.quiz ? 'Update' : 'Create'} Question</Button>
        </Col>
      </Row>
    </Form>
  }
}

export default Form.create({name: 'quizComponent'})(QuestionComponent)

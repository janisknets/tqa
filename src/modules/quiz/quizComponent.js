import React from 'react'
import { Row, Col, Form, Button, Alert } from 'antd'

import DecoratedInput from 'modules/decoratedInput'

class QuizComponent extends React.Component {
  render () {
    const quiz = this.props.quiz || {}
    return <Form onSubmit={(e) => this.props.onSubmit(e, this.props.form)} >
      {this.props.error && <Alert type="error" message={this.props.error}/>}
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Name' name='name' value={quiz.name} />
        </Col>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Description' name='description' type='textarea'  value={quiz.description} />
        </Col>
      </Row>
      <Row>
        <Col offset={11} span={4} >
          <Button type='primary' htmlType='submit' >{this.props.quiz ? 'Update' : 'Create'} Quiz</Button>
        </Col>
      </Row>
    </Form>
  }
}

export default Form.create({name: 'quizComponent'})(QuizComponent)

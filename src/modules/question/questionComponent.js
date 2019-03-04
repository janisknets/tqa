import React from 'react'
import { Row, Col, Form, Button, Alert } from 'antd'
import { Link } from 'react-router-dom'

import DecoratedInput from 'modules/decoratedInput'
import AnswersList from './AnswersList'

class QuestionComponent extends React.Component {
  render () {
    const question = this.props.question || {}
    return <Form onSubmit={(e) => this.props.onSubmit(e, this.props.form)} >
      <Link to='./' ><Button>To Questions list</Button></Link>
      {this.props.error && <Alert type="error" message={this.props.error}/>}
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Question' name='question' value={question.question} />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} onChange={this.props.onTypeChange} value={question.area}
            label='Area' name='area' type='radio' options={['js', 'node', 'react']} />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} onChange={this.props.onTypeChange} value={question.complexity}
            label='Complexity' name='complexity' type='radio' options={['easy', 'medium', 'hard']} />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} onChange={this.props.onTypeChange} value={question.type}
            label='Type' name='type' type='radio' options={['input', 'textarea', 'checkbox', 'radio']} />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <AnswersList type={this.props.type} form={this.props.form} />
        </Col>
      </Row>
      <Row>
        <Col offset={11} span={4} >
          <Button type='primary' htmlType='submit' >{this.props.question ? 'Update Question' : 'Create Question'}</Button>
        </Col>
      </Row>
    </Form>
  }
}

export default Form.create({name: 'quizComponent'})(QuestionComponent)

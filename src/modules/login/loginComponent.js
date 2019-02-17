import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button, Alert } from 'antd'

import DecoratedInput from 'modules/decoratedInput'


class LoginComponent extends React.Component {
  render () {
    return <Form onSubmit={(e) => this.props.onSubmit(e, this.props.form)} >
      {this.props.error && <Alert type="error" message={this.props.error}/>}
      <Row>
        <Col span={8}/>
        <Col span={8} >
          <DecoratedInput form={this.props.form} label='Username' name='username' />
        </Col>
        <Col span={8} />
      </Row>
      <Row>
        <Col span={8}/>
        <Col span={8} >
          <DecoratedInput form={this.props.form} label='Password' name='password' />
        </Col>
        <Col span={8} />
      </Row>
      <Row>
        <Col span={10} />
        <Col span={2} >
          <Button type='primary' htmlType='submit' >Login</Button>
        </Col>
        <Col span={4}>
          <Link to='/register' >I don't have an account</Link>
        </Col>
        <Col span={8} />
      </Row>
    </Form>
  }
}

export default Form.create({name: 'LoginComponent'})(LoginComponent)

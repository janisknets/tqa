import React from 'react'
import { Row, Col, Form, Button, Alert } from 'antd'

import DecoratedInput from 'modules/decoratedInput'

class registerCompoment extends React.Component {
  render () {
    return <Form onSubmit={(e) => this.props.onSubmit(e, this.props.form)} >
      {this.props.error && <Alert type="error" message={this.props.error}/>}
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Username' name='username' />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Email' name='email' />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Name' name='name' />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Surname' name='surname' />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput type='date' form={this.props.form} label='Date of Birth' name='dateOfBirth' />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Password' name='password' />
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={8} >
          <DecoratedInput form={this.props.form} label='Repeat Password' name='password2' />
        </Col>
      </Row>
      <Row>
        <Col offset={11} span={4} >
          <Button type='primary' htmlType='submit' >Login</Button>
        </Col>
      </Row>
    </Form>
  }
}

export default Form.create({name: 'registerCompoment'})(registerCompoment)

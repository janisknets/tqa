import React from 'react'
import { Form, Input, Radio, Button, Checkbox } from 'antd'
import TextArea from 'antd/lib/input/TextArea';

class createQuestionPres extends React.Component {
  constructor(props) {
    super(props)
    this.getFieldDecorator = this.props.form.getFieldDecorator;
    this.state = {
      typeOptions: ['input', 'checkbox', 'radio'],
      areaOptions: ['js', 'node', 'react', 'angular'],
      complexityOptions: [ 'low', 'medium', 'hard'],
      answers: []
    }
  }

  onTypeChange = (e) => {
    console.log(e)
  }

  getCorrectAnswer(index, jsx) {
    const type = this.props.form.getFieldValue('type')
    switch(type) {
      case 'radio':
        return <Form.Item>
          {this.getFieldDecorator(`q0-a${index}`, {})(<Radio.Button value={index}>{jsx}</Radio.Button>)}
        </Form.Item>
      case 'checkbox':
        return <Form.Item>
          {this.getFieldDecorator(`q0-a${index}`, {})(<Checkbox />)}
        </Form.Item>
      default:
        return null
    }
  }

  getAnswers = () => {
    return <Radio.Group>
    {
      this.state.answers && this.state.answers.map((answer, index) => {
        return <div key={index}>
          {
            this.getCorrectAnswer(index,
              <Form.Item label={`Add answer Nr. ${index} for question`}>{
                this.getFieldDecorator(`answers-${index}`, {
                  required: true
                })(
                  <Input />
                )
                  }
              </Form.Item>)
          }
          </div>
        })
    }</Radio.Group>
  }

  addAnswer = (e) => {
    e.preventDefault()
    let answers = this.state.answers.map(item => ({ ...item }));
    answers.push('a')
    this.setState({answers})
  }

  render() {
    return <Form onSubmit={this.props.onSubmit}>
      <h2>Create new question</h2>
      <Form.Item label='Select the type of the question' onChange={this.onTypeChange}>{
          this.getFieldDecorator(`type`, {
            required: true
          })(
            <Radio.Group options={this.state.typeOptions} />
          )
        }
      </Form.Item>
      <Form.Item label='Select the area of the question'>{
          this.getFieldDecorator(`area`, {
            required: true
          })(
            <Radio.Group options={this.state.areaOptions} />
          )
        }
      </Form.Item>
      <Form.Item label='Select the complexity of this question'>{
          this.getFieldDecorator(`complexity`, {
            required: true
          })(
            <Radio.Group options={this.state.complexityOptions} />
          )
        }
      </Form.Item>
      <Form.Item label='Add the questions text'>{
          this.getFieldDecorator(`question`, {
            required: true
          })(
            <Input />
          )
        }
      </Form.Item>
      { this.getAnswers() }
      { this.props.form.getFieldValue('type') && this.props.form.getFieldValue('type') !== 'input' && <Form.Item>
        <Button type="secondary" onClick={this.addAnswer} >Add Answer</Button>
      </Form.Item>
      }
      <Form.Item label="Code for the question (if required)">{
        this.getFieldDecorator(`question`, {
          required: true
        })(
          <TextArea>Create Question</TextArea>
        )
      }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create Question</Button>
      </Form.Item>
    </Form>
  }
}

export default Form.create({name: 'createQuestion'})(createQuestionPres)

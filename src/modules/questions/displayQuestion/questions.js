import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Radio, Form, Input, Button, Checkbox } from 'antd'

import Code from 'modules/code/code'
import { getQuestions } from 'redux/actions/questionsActions';

class Questions extends Component {
    state = {
        current: 0,
        correct: 0,
        checked: {}
    }

    componentDidMount() {
        this.props.getQuestions()
    }

    resetQuestions = () => {
        this.setState({current: 0, correct: 0, checked: {}})
    }

    handleClickCheckbox = (name) => {
        let checked = {...this.state.checked}
        checked[name] = !checked[name]
        this.setState({checked})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (err) {
            console.error(err);
          }
          const question = this.props.questions[this.state.current];
          let correct = this.state.correct;
          let current = this.state.current + 1;
          switch (question.type) {
            case "checkbox":
                const keys = Object.keys(values);
                let index = null;
                let failed = false;
                for (let key of keys) {
                    index = Number(key.match(/q[0-9]+a([0-9])+/)[1])
                    if ((values[key] === true && question.correct.indexOf(index) === -1) ||
                        (!values[key] && question.correct.indexOf(index) > -1)){
                        failed = true;
                        break;
                    }
                }
                let obj = {}
                keys.forEach(key => obj[key] = undefined)
                if (!failed) {
                    correct++;
                }
                break;
            case "radio":
                question.correct[0] === values[`q${question.id}`] && correct++
                break;
            default:
                if (question.correct === null || (`answer ${question.correct}` === values[question.label])) {
                    correct++;
                }

          }

          this.setState({current, correct})
        });
    }
    
    getNextQuestion = (input) => {
        const { getFieldDecorator } = this.props.form;
        let question = this.props.questions[input]
        if (!question) {
            return <div>Nothing to ask</div>
        }
        switch(question.type) {
            case "radio":
                return <Form.Item>
                    <h2>{question.question}</h2>
                    {question.code && (<Code code={question.code}/>) }
                    {getFieldDecorator(`q${question.id}`, {})(
                        <Radio.Group>
                            {Object.values(question.answers).map((answer, index) => <Radio key={index} value={index}>{answer}</Radio>)}
                        </Radio.Group>
                    )}
                </Form.Item>
            case "checkbox":
                return <React.Fragment>
                    <h2>{question.question}</h2>
                    {question.code && (<Code code={question.code}/>) }
                    {Object.keys(question.answers).map((key, index) => {
                        let name = `q${question.id}a${index}`
                        return <Form.Item key={key}>
                            {getFieldDecorator(name, {})(
                                <Checkbox checked={this.state.checked[name]} onClick={() => this.handleClickCheckbox(name)} label={index}>{question.answers[key]}</Checkbox>
                            )}
                        </Form.Item>
                    })}
                </React.Fragment>

            case "input":
                return <Form.Item>
                    <h2>{question.question}</h2>
                    {getFieldDecorator(`q${question.id}`, {})(
                        <Input />
                    )}
                </Form.Item>
            case "textarea":
            default:
                return <div>{question.question}</div>
        }
    }

    render () {
        return <div>
            <span>Correct answers: {this.state.current > 0 ? `${this.state.correct} of ${this.state.current}` : 'Not started'}</span>
            <Form onSubmit={this.handleSubmit}>
                {this.getNextQuestion(this.state.current)}
                <Button type="primary" htmlType="submit">Next</Button>
                <Button type="secondary" onClick={this.resetQuestions}>Reset</Button>
            </Form>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        questions: Object.values(state.questions.values)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuestions: () => dispatch(getQuestions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'questions' })(Questions))

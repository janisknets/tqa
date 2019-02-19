import React from 'react'
import { Row, Button, Checkbox, Radio } from 'antd'
import DecoratedInput from 'modules/decoratedInput'

const RenderChecboxRow = ({i, form, option}) => <Row>
  <Checkbox value={option}><DecoratedInput key={`answers-${i}`} type='input' form={form} name={`answers-${i}`} /></Checkbox>
</Row>

const RenderRadioRow = ({i, form, option}) => <Row>
  <Radio value={option}><DecoratedInput key={`answers-${i}`} type='input' form={form} name={`answers-${i}`} /></Radio>
</Row>

const RenderAnswerRow = ({type, form, options, correct}) => {
  const { getFieldDecorator } = form
  switch (type) {
    case 'radio':
      return getFieldDecorator('correctRadio', {initialValue: correct})(<Radio.Group>
        {options.map((option, i) => <RenderRadioRow key={`radioRow-${i}`} i={i} form={form} option={option} />)}
      </Radio.Group>)
    case 'checkbox':
      return getFieldDecorator('correctCheckbox', {initialValue: correct})(<Checkbox.Group >
        {options.map((option, i) => <RenderChecboxRow key={`checkboxRow-${i}`}  i={i} form={form} option={option} />)}
      </Checkbox.Group>)
    default:
      return null
  }
}

const AnswersListComponent = ({form, type, answers, correct, addAnswer}) => {
  return <div>
    <Row>
      <RenderAnswerRow form={form} type={type} options={answers} correct={correct} />
    </Row>
    <Row>
      <Button onClick={addAnswer}>Add answer option</Button>
    </Row>
  </div>
}

export default AnswersListComponent
